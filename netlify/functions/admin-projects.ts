import { Handler, HandlerEvent } from "@netlify/functions";
import { MongoClient, ObjectId } from "mongodb";
import * as yup from "yup";
import { adminHandler } from "../shared/admin-handler";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

export const projectSchema = yup.object().shape({
  title: yup.string().required("please enter a name for the project"),
  slug: yup.string().required("please enter a slug for the project"),
  intro: yup.string().required("please enter an intro for the project"),
  year: yup.number().required("please enter a year"),
  description: yup
    .string()
    .required("please enter a description for the project"),
  mainImage: yup.string().required("please enter a main image for the project"),
  listingImage: yup
    .string()
    .required("please enter a listing image for the project"),
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id: _, ...updateFields } = projectDocument;

    await client
      .db(process.env.MONGO_DB_NAME)
      .collection(PROJECTS_COLLECTION)
      .findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            ...updateFields,
            updatedAt: new Date(),
          },
        }
      );

    return jsonResponse({
      status: 200,
      body: { message: "Project successfully updated" },
    });
  } catch (error) {
    console.error(error);
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
