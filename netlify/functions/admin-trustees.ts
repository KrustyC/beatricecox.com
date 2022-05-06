import { Handler, HandlerEvent } from "@netlify/functions";
import { MongoClient, ObjectId } from "mongodb";
import * as yup from "yup";
import { adminHandler } from "../shared/admin-handler";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

export const trusteeSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
});

const TRUSTEES_COLLECTION = "trustees";

async function get(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { id } = handlerEvent.queryStringParameters as { id?: string };

    if (id) {
      const trustee = await client
        .db(process.env.MONGO_DB_NAME)
        .collection(TRUSTEES_COLLECTION)
        .findOne({ _id: new ObjectId(id) });

      if (!trustee) {
        return jsonResponse({
          status: 404,
          body: {
            message: `Trustee with id "${id}" could not be found`,
          },
        });
      }

      return jsonResponse({
        status: 200,
        body: { trustee },
      });
    }

    const trustees = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(TRUSTEES_COLLECTION)
      .find()
      .toArray();

    return jsonResponse({
      status: 200,
      body: { trustees },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching trustees, please try again later on.",
      },
    });
  }
}

async function post(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { trustee = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let trusteeDocument;

    try {
      trusteeDocument = await trusteeSchema.validate(trustee);
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
      .collection(TRUSTEES_COLLECTION)
      .insertOne({
        ...trusteeDocument,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    return jsonResponse({
      status: 200,
      body: { message: "Trustee successfully added", id: result.insertedId },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message:
          "Error adding your trustee to the database, please try again later on.",
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

    const { trustee = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};
    let trusteeDocument;

    try {
      trusteeDocument = await trusteeSchema.validate(trustee);
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
      .collection(TRUSTEES_COLLECTION)
      .findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            name: trusteeDocument.name,
            description: trusteeDocument.description,
            updatedAt: new Date(),
          },
        }
      );

    return jsonResponse({
      status: 200,
      body: { message: "Trustee successfully updated" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error updating your trustee, please try again later on.",
      },
    });
  }
}

async function deleteTrustee(client: MongoClient, handlerEvent: HandlerEvent) {
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

    await client
      .db(process.env.MONGO_DB_NAME)
      .collection(TRUSTEES_COLLECTION)
      .deleteMany({
        _id: new ObjectId(id),
      });

    return jsonResponse({
      status: 200,
      body: { message: "Trustee successfully deleted" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error deleting the trustee, please try again later on.",
      },
    });
  }
}

const handler: Handler = async (event, context) => {
  const handlers = [
    { method: HTTP_METHODS.GET, handler: get },
    { method: HTTP_METHODS.POST, handler: post },
    { method: HTTP_METHODS.PUT, handler: put },
    { method: HTTP_METHODS.DELETE, handler: deleteTrustee },
  ];

  return adminHandler({
    event,
    context,
    handlers,
    onlyAuthorizedUsers: true,
  });
};

export { handler };
