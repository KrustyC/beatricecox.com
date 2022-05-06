import { Handler, HandlerEvent, HandlerResponse } from "@netlify/functions";
import { MongoClient, ObjectId } from "mongodb";
import * as yup from "yup";
import { adminHandler } from "../shared/admin-handler";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

export const teachingResourceSchema = yup.object().shape({
  title: yup
    .string()
    .required("please enter a title for the teaching resource"),
  image: yup.string().required("image is required"),
  materials: yup.array().of(
    yup.object().shape({
      name: yup.string().required("material needs a name"),
      date: yup.string().required("material needs a date"),
      host: yup.string(),
      pdf: yup.string(),
      website: yup.string(),
    })
  ),
});

const TEACHING_RESOURCES_COLLECTION = "teachingResources";

async function get(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { id } = handlerEvent.queryStringParameters as { id?: string };

    if (id) {
      const teachingResource = await client
        .db(process.env.MONGO_DB_NAME)
        .collection(TEACHING_RESOURCES_COLLECTION)
        .findOne({ _id: new ObjectId(id) });

      if (!teachingResource) {
        return jsonResponse({
          status: 404,
          body: {
            message: `Teaching Resource with id "${id}" could not be found`,
          },
        });
      }

      return jsonResponse({
        status: 200,
        body: {
          teachingResource,
        },
      });
    }

    const teachingResources = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(TEACHING_RESOURCES_COLLECTION)
      .find()
      .toArray();

    return jsonResponse({
      status: 200,
      body: {
        teachingResources,
      },
    });
  } catch (error) {
    console.error(error);
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching teaching resource, please try again later on.",
      },
    });
  }
}

async function post(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { teachingResource = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let teachingResourceDocument;

    try {
      teachingResourceDocument = await teachingResourceSchema.validate(
        teachingResource
      );
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

    const result = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(TEACHING_RESOURCES_COLLECTION)
      .insertOne({
        ...teachingResourceDocument,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    return jsonResponse({
      status: 200,
      body: {
        message: "Teaching resource successfully added",
        id: result.insertedId,
      },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message:
          "Error adding your teaching resource to the database, please try again later on.",
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

    const { teachingResource = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let teachingResourceDocument;

    try {
      teachingResourceDocument = await teachingResourceSchema.validate(
        teachingResource
      );
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
      .collection(TEACHING_RESOURCES_COLLECTION)
      .findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            title: teachingResourceDocument.title,
            image: teachingResourceDocument.image,
            materials: teachingResourceDocument.materials,
            updatedAt: new Date(),
          },
        }
      );

    return jsonResponse({
      status: 200,
      body: { message: "Teaching resource successfully updated" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message:
          "Error updating your teaching resource, please try again later on.",
      },
    });
  }
}

async function deleteTeachingResource(
  client: MongoClient,
  handlerEvent: HandlerEvent
): Promise<HandlerResponse> {
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
      .collection(TEACHING_RESOURCES_COLLECTION)
      .deleteMany({
        _id: new ObjectId(id),
      });

    return jsonResponse({
      status: 200,
      body: { message: "Teaching resource successfully deleted" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message:
          "Error deleting the teaching resource, please try again later on.",
      },
    });
  }
}

const handler: Handler = async (event, context) => {
  const handlers = [
    { method: HTTP_METHODS.GET, handler: get },
    { method: HTTP_METHODS.POST, handler: post },
    { method: HTTP_METHODS.PUT, handler: put },
    { method: HTTP_METHODS.DELETE, handler: deleteTeachingResource },
  ];

  return adminHandler({
    event,
    context,
    handlers,
    onlyAuthorizedUsers: true,
  });
};

export { handler };
