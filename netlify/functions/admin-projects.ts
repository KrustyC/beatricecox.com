import { Handler, HandlerEvent } from "@netlify/functions";
import { MongoClient, ObjectId } from "mongodb";
import * as yup from "yup";
import { adminHandler } from "../shared/admin-handler";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

export const projectSchema = yup.object().shape({
  title: yup.string().required("please enter a name for the project"),
  intro: yup.string().required("please enter an intro for the project"),
  description: yup
    .string()
    .required("please enter a description for the project"),
  images: yup
    .array()
    .of(yup.string().required("please enter an image for the project")),
  links: yup.object().shape({
    teacherResources: yup
      .object()
      .shape({
        _id: yup.string().nullable(),
        title: yup.string().nullable(),
      })
      .nullable(),
    press: yup
      .object()
      .shape({
        _id: yup.string().nullable(),
        title: yup.string().nullable(),
      })
      .nullable(),
    research: yup
      .object()
      .shape({
        _id: yup.string().nullable(),
        title: yup.string().nullable(),
      })
      .nullable(),
    shop: yup
      .object()
      .shape({
        _id: yup.string().nullable(),
        name: yup.string().nullable(),
      })
      .nullable(),
  }),
});

const PROJECTS_COLLECTION = "projects";

async function get(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { id } = handlerEvent.queryStringParameters as { id?: string };

    if (id) {
      const project = await client
        .db(process.env.MONGO_DB_NAME)
        .collection(PROJECTS_COLLECTION)
        .findOne({ _id: new ObjectId(id) });

      if (!project) {
        return jsonResponse({
          status: 404,
          body: {
            message: `Project with id "${id}" could not be found`,
          },
        });
      }

      return jsonResponse({
        status: 200,
        body: { project },
      });
    }

    const projects = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(PROJECTS_COLLECTION)
      .find()
      .toArray();

    return jsonResponse({
      status: 200,
      body: { projects },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching projects, please try again later on.",
      },
    });
  }
}
type Links = {
  teacherResources: {
    _id: string;
    title: string;
  };
  press: {
    _id: string;
    title: string;
  };
  research: {
    _id: string;
    title: string;
  };
  shop: {
    _id: string;
    name: string;
  };
};

function mapLinksToSchema(links: Links): Partial<Links> {
  return {
    teacherResources: links.teacherResources?._id
      ? {
          _id: links.teacherResources._id,
          title: links.teacherResources.title,
        }
      : null,
    press: links.press._id
      ? {
          _id: links.press._id,
          title: links.press.title,
        }
      : null,
    research: links.research._id
      ? {
          _id: links.research._id,
          title: links.research.title,
        }
      : null,
    shop: links.shop._id
      ? {
          _id: links.shop._id,
          name: links.shop.name,
        }
      : null,
  };
}

async function post(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { project = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let projectDocument;

    try {
      projectDocument = await projectSchema.validate(project);
    } catch (error) {
      console.error(error);
      return jsonResponse({
        status: 400,
        body: {
          message: {
            name: "Validation Error",
            error: (error as Error).message,
          },
        },
      });
    }

    const result = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(PROJECTS_COLLECTION)
      .insertOne({
        ...projectDocument,
        links: mapLinksToSchema(projectDocument.links),
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    return jsonResponse({
      status: 200,
      body: { message: "Project successfully added", id: result.insertedId },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message:
          "Error adding your project to the database, please try again later on.",
      },
    });
  }
}

async function put(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { id } = handlerEvent.queryStringParameters as { id?: string };

    if (!id) {
      return jsonResponse({
        status: 400,
        body: {
          message: {
            name: "It is required to pass a id in the form of a query parameter `id`",
          },
        },
      });
    }

    const { project = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let projectDocument;

    try {
      projectDocument = await projectSchema.validate(project);
    } catch (error) {
      return jsonResponse({
        status: 400,
        body: {
          message: {
            name: "Validation Error",
            error: (error as Error).message,
          },
        },
      });
    }

    await client
      .db(process.env.MONGO_DB_NAME)
      .collection(PROJECTS_COLLECTION)
      .findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            title: projectDocument.title,
            intro: projectDocument.intro,
            description: projectDocument.description,
            images: projectDocument.images,
            links: mapLinksToSchema(projectDocument.links),
            updatedAt: new Date(),
          },
        }
      );

    return jsonResponse({
      status: 200,
      body: { message: "Project successfully updated" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error updating your project, please try again later on.",
      },
    });
  }
}

async function deleteProject(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    // Find the query params slug
    const { id } = handlerEvent.queryStringParameters as { id?: string };

    if (!id) {
      return jsonResponse({
        status: 400,
        body: {
          message: {
            name: "It is required to pass a id in the form of a query parameter `id`",
          },
        },
      });
    }

    await client
      .db(process.env.MONGO_DB_NAME)
      .collection(PROJECTS_COLLECTION)
      .deleteMany({
        _id: new ObjectId(id),
      });

    return jsonResponse({
      status: 200,
      body: { message: "Project successfully deleted" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error deleting the project, please try again later on.",
      },
    });
  }
}
const handler: Handler = async (event, context) => {
  const handlers = [
    { method: HTTP_METHODS.GET, handler: get },
    { method: HTTP_METHODS.POST, handler: post },
    { method: HTTP_METHODS.PUT, handler: put },
    { method: HTTP_METHODS.DELETE, handler: deleteProject },
  ];

  return adminHandler({
    event,
    context,
    handlers,
    onlyAuthorizedUsers: true,
  });
};

export { handler };
