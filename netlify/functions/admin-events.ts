import { Handler, HandlerEvent } from "@netlify/functions";
import { MongoClient } from "mongodb";
import slugify from "slugify";
import * as yup from "yup";
import { adminHandler } from "../shared/admin-handler";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

const timeValidator = yup.object().shape({
  time: yup.string().required(), // Use regex
  period: yup.string().required(), // Use enum
});

export const eventSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  image: yup.string(),
  eventbriteLink: yup.string().url(),
  date: yup
    .object()
    .shape({
      day: yup.string().required(), // use Regex,
      startTime: timeValidator,
      endTime: timeValidator,
    })
    .required(),
});

const EVENTS_COLLECTION = "events";

async function get(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { slug } = handlerEvent.queryStringParameters as { slug?: string };

    if (slug) {
      const event = await client
        .db(process.env.MONGO_DB_NAME)
        .collection(EVENTS_COLLECTION)
        .findOne({ slug }, { projection: { _id: 0 } });

      if (!event) {
        return jsonResponse({
          status: 404,
          body: {
            message: `Event with slug "${slug}" could not be found`,
          },
        });
      }

      return jsonResponse({
        status: 200,
        body: { event },
      });
    }

    const events = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(EVENTS_COLLECTION)
      .find()
      .toArray();

    return jsonResponse({
      status: 200,
      body: { events },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching events, please try again later on.",
      },
    });
  }
}

async function post(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { event = null, status = "draft" } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let eventDocument;

    try {
      eventDocument = await eventSchema.validate(event);
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

    const slug = slugify(event.title, {
      lower: true,
      strict: true,
    });

    await client
      .db(process.env.MONGO_DB_NAME)
      .collection(EVENTS_COLLECTION)
      .insertOne({
        ...eventDocument,
        slug,
        isPublished: status === "publish",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    return jsonResponse({
      status: 200,
      body: { message: "Event successfully inserted" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error creating your event, please try again later on.",
      },
    });
  }
}

async function put(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    // Find the query params slug
    const { slug } = handlerEvent.queryStringParameters as { slug?: string };

    if (!slug) {
      return jsonResponse({
        status: 400,
        body: {
          message: {
            name: "It is required to pass a slug in the form of a query parameter `slug`",
          },
        },
      });
    }

    const { event = null, status = "draft" } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};
    let eventDocument;

    try {
      eventDocument = await eventSchema.validate(event);
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
      .collection(EVENTS_COLLECTION)
      .findOneAndUpdate(
        {
          slug,
        },
        {
          $set: {
            ...eventDocument,
            isPublished: status === "publish",
            updatedAt: new Date(),
          },
        }
      );

    return jsonResponse({
      status: 200,
      body: { message: "Event successfully updated" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error updating your event, please try again later on.",
      },
    });
  }
}

async function deleteEvent(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    // Find the query params slug
    const { slug } = handlerEvent.queryStringParameters as { slug?: string };

    if (!slug) {
      return jsonResponse({
        status: 400,
        body: {
          message: {
            name: "It is required to pass a slug in the form of a query parameter `slug`",
          },
        },
      });
    }

    await client
      .db(process.env.MONGO_DB_NAME)
      .collection(EVENTS_COLLECTION)
      .deleteMany({
        slug,
      });

    return jsonResponse({
      status: 200,
      body: { message: "Event successfully deleted" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error deleting your event, please try again later on.",
      },
    });
  }
}

const handler: Handler = async (event, context) => {
  const handlers = [
    { method: HTTP_METHODS.GET, handler: get },
    { method: HTTP_METHODS.POST, handler: post },
    { method: HTTP_METHODS.PUT, handler: put },
    { method: HTTP_METHODS.DELETE, handler: deleteEvent },
  ];

  return adminHandler({
    event,
    context,
    handlers,
    onlyAuthorizedUsers: true,
  });
};

export { handler };
