import { Handler, HandlerEvent } from "@netlify/functions";
import { MongoClient, ObjectId } from "mongodb";
import * as yup from "yup";
import { adminHandler } from "../shared/admin-handler";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

export const newsSchema = yup.object().shape({
  headline: yup.string().required("please enter a a news headline"),
});

const NEWS_HEADLINE_COLLECTION = "news_headline";

async function get(client: MongoClient) {
  try {
    const newsHeadline = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(NEWS_HEADLINE_COLLECTION)
      .find()
      .toArray();

    return jsonResponse({
      status: 200,
      body: {
        newsHeadline: newsHeadline[0],
      },
    });
  } catch (error) {
    console.error(error);
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching news headline, please try again later on.",
      },
    });
  }
}

async function post(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const newsHeadline = handlerEvent.body ? JSON.parse(handlerEvent.body) : {};

    let newsDocument;

    try {
      newsDocument = await newsSchema.validate(newsHeadline);
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

    const newsHeadlineContent = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(NEWS_HEADLINE_COLLECTION)
      .find()
      .toArray();

    if (!newsHeadlineContent.length) {
      await client
        .db(process.env.MONGO_DB_NAME)
        .collection(NEWS_HEADLINE_COLLECTION)
        .insertOne(newsDocument);

      return jsonResponse({
        status: 200,
        body: { message: "News Headline successfully created" },
      });
    }

    await client
      .db(process.env.MONGO_DB_NAME)
      .collection(NEWS_HEADLINE_COLLECTION)
      .findOneAndUpdate(
        {
          _id: new ObjectId(newsHeadlineContent[0]._id),
        },
        {
          $set: {
            headline: newsDocument.headline,
          },
        }
      );

    return jsonResponse({
      status: 200,
      body: { message: "News Headline successfully updated" },
    });
  } catch (error) {
    console.error(error);
    return jsonResponse({
      status: 500,
      body: {
        message: "Error updating your news, please try again later on.",
      },
    });
  }
}

const handler: Handler = async (event, context) => {
  const handlers = [
    { method: HTTP_METHODS.GET, handler: get },
    { method: HTTP_METHODS.POST, handler: post },
  ];

  return adminHandler({
    event,
    context,
    handlers,
    onlyAuthorizedUsers: true,
  });
};

export { handler };
