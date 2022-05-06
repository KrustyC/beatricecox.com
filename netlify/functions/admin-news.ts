import { Handler, HandlerEvent, HandlerResponse } from "@netlify/functions";
import { MongoClient, ObjectId } from "mongodb";
import { format, parse } from "date-fns";
import * as yup from "yup";
import { adminHandler } from "../shared/admin-handler";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

export const newsSchema = yup.object().shape({
  title: yup.string().required("please enter a title for the news"),
  description: yup.string().required("please enter a description for the news"),
  image: yup.string(),
  expirationDate: yup.string().required(), // use Regex,
});

const NEWS_COLLECTION = "news";

async function get(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { id } = handlerEvent.queryStringParameters as { id?: string };

    if (id) {
      const news = await client
        .db(process.env.MONGO_DB_NAME)
        .collection(NEWS_COLLECTION)
        .findOne({ _id: new ObjectId(id) });

      if (!news) {
        return jsonResponse({
          status: 404,
          body: {
            message: `News with id "${id}" could not be found`,
          },
        });
      }

      return jsonResponse({
        status: 200,
        body: {
          news: {
            ...news,
            expirationDate: format(news.expirationDate, "dd/MM/yyyy"),
          },
        },
      });
    }

    const news = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(NEWS_COLLECTION)
      .find()
      .toArray();

    return jsonResponse({
      status: 200,
      body: {
        news: news.map((currentNews) => ({
          ...currentNews,
          expirationDate: format(currentNews.expirationDate, "dd/MM/yyyy"),
        })),
      },
    });
  } catch (error) {
    console.error(error);
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching news, please try again later on.",
      },
    });
  }
}

async function post(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { news = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let newsDocument;

    try {
      newsDocument = await newsSchema.validate(news);
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

    const expirationDate = parse(
      newsDocument.expirationDate,
      "dd/MM/yyyy",
      new Date()
    );

    const result = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(NEWS_COLLECTION)
      .insertOne({
        ...newsDocument,
        expirationDate,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    return jsonResponse({
      status: 200,
      body: { message: "News successfully added", id: result.insertedId },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message:
          "Error adding your news to the database, please try again later on.",
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

    const { news = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let newsDocument;

    try {
      newsDocument = await newsSchema.validate(news);
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

    const expirationDate = parse(
      newsDocument.expirationDate,
      "dd/MM/yyyy",
      new Date()
    );
    await client
      .db(process.env.MONGO_DB_NAME)
      .collection(NEWS_COLLECTION)
      .findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            title: newsDocument.title,
            description: newsDocument.description,
            image: newsDocument.image,
            expirationDate,
            updatedAt: new Date(),
          },
        }
      );

    return jsonResponse({
      status: 200,
      body: { message: "News successfully updated" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error updating your news, please try again later on.",
      },
    });
  }
}

async function deleteNews(
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
      .collection(NEWS_COLLECTION)
      .deleteMany({
        _id: new ObjectId(id),
      });

    return jsonResponse({
      status: 200,
      body: { message: "News successfully deleted" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error deleting the news, please try again later on.",
      },
    });
  }
}

const handler: Handler = async (event, context) => {
  const handlers = [
    { method: HTTP_METHODS.GET, handler: get },
    { method: HTTP_METHODS.POST, handler: post },
    { method: HTTP_METHODS.PUT, handler: put },
    { method: HTTP_METHODS.DELETE, handler: deleteNews },
  ];

  return adminHandler({
    event,
    context,
    handlers,
    onlyAuthorizedUsers: true,
  });
};

export { handler };
