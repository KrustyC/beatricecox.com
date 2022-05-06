import { Handler, HandlerEvent, HandlerResponse } from "@netlify/functions";
import { MongoClient, ObjectId } from "mongodb";
import * as yup from "yup";
import { adminHandler } from "../shared/admin-handler";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

export const researcheschema = yup.object().shape({
  title: yup.string().required("please enter a title for the research"),
  image: yup.string().required("image is required"),
  materials: yup.array().of(
    yup.object().shape({
      name: yup.string().required("material needs a name"),
      date: yup.string().required("material needs a date"),
      type: yup.string(),
      authorOrInterviewees: yup.string(),
      link: yup.object().shape({
        value: yup.string().required(),
        type: yup.string().oneOf(["website", "pdf"]).required(),
      }),
    })
  ),
});

const RESEARCHES_COLLECTION = "researches";

async function get(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { id } = handlerEvent.queryStringParameters as { id?: string };

    if (id) {
      const research = await client
        .db(process.env.MONGO_DB_NAME)
        .collection(RESEARCHES_COLLECTION)
        .findOne({ _id: new ObjectId(id) });

      if (!research) {
        return jsonResponse({
          status: 404,
          body: {
            message: `Research with id "${id}" could not be found`,
          },
        });
      }

      return jsonResponse({
        status: 200,
        body: {
          research,
        },
      });
    }

    const researches = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(RESEARCHES_COLLECTION)
      .find()
      .toArray();

    return jsonResponse({
      status: 200,
      body: {
        researches,
      },
    });
  } catch (error) {
    console.error(error);
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching research, please try again later on.",
      },
    });
  }
}

async function post(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { research = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let researchDocument;

    try {
      researchDocument = await researcheschema.validate(research);
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
      .collection(RESEARCHES_COLLECTION)
      .insertOne({
        ...researchDocument,
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
          "Error adding your research to the database, please try again later on.",
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

    const { research = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let researchDocument;

    try {
      researchDocument = await researcheschema.validate(research);
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
      .collection(RESEARCHES_COLLECTION)
      .findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            title: researchDocument.title,
            image: researchDocument.image,
            materials: researchDocument.materials,
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
        message: "Error updating your research, please try again later on.",
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
      .collection(RESEARCHES_COLLECTION)
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
        message: "Error deleting the research, please try again later on.",
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
