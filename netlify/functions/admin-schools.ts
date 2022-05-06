import { Handler, HandlerEvent, HandlerResponse } from "@netlify/functions";
import { MongoClient, ObjectId } from "mongodb";
import * as yup from "yup";
import { adminHandler } from "../shared/admin-handler";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

export const schoolSchema = yup.object().shape({
  name: yup.string().required("Please enter a name for the school"),
  geographicalArea: yup.string().required("Please enter a geographical area"),
  postcode: yup.string().required("Please enter a postcode"),
  type: yup.string().required().oneOf(["primary", "secondary"]),
});

const SCHOOLS_COLLECTION = "schools";

async function get(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { id } = handlerEvent.queryStringParameters as { id?: string };

    if (id) {
      const school = await client
        .db(process.env.MONGO_DB_NAME)
        .collection(SCHOOLS_COLLECTION)
        .findOne({ _id: new ObjectId(id) });

      if (!school) {
        return jsonResponse({
          status: 404,
          body: {
            message: `School with id "${id}" could not be found`,
          },
        });
      }

      return jsonResponse({
        status: 200,
        body: { school },
      });
    }

    const schools = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(SCHOOLS_COLLECTION)
      .find()
      .toArray();

    return jsonResponse({
      status: 200,
      body: { schools },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching schools, please try again later on.",
      },
    });
  }
}

async function post(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { school = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let schoolDocument;

    try {
      schoolDocument = await schoolSchema.validate(school);
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
      .collection(SCHOOLS_COLLECTION)
      .insertOne({
        name: schoolDocument.name,
        postcode: schoolDocument.postcode,
        geographicalArea: schoolDocument.geographicalArea,
        type: schoolDocument.type,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    return jsonResponse({
      status: 200,
      body: { message: "School successfully added", id: result.insertedId },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message:
          "Error adding your school to the database, please try again later on.",
      },
    });
  }
}

async function put(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    // Find the query params id
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

    const { school = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let schoolDocument;

    try {
      schoolDocument = await schoolSchema.validate(school);
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
      .collection(SCHOOLS_COLLECTION)
      .findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            name: schoolDocument.name,
            postcode: schoolDocument.postcode,
            geographicalArea: schoolDocument.geographicalArea,
            type: schoolDocument.type,
            updatedAt: new Date(),
          },
        }
      );

    return jsonResponse({
      status: 200,
      body: { message: "School successfully updated" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error updating your school, please try again later on.",
      },
    });
  }
}

async function deleteSchool(
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
      .collection(SCHOOLS_COLLECTION)
      .deleteMany({
        _id: new ObjectId(id),
      });

    return jsonResponse({
      status: 200,
      body: { message: "School successfully deleted" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error deleting the school, please try again later on.",
      },
    });
  }
}

const handler: Handler = async (event, context) => {
  const handlers = [
    { method: HTTP_METHODS.GET, handler: get },
    { method: HTTP_METHODS.POST, handler: post },
    { method: HTTP_METHODS.PUT, handler: put },
    { method: HTTP_METHODS.DELETE, handler: deleteSchool },
  ];

  return adminHandler({
    event,
    context,
    handlers,
    onlyAuthorizedUsers: true,
  });
};

export { handler };
