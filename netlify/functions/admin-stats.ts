import { Handler } from "@netlify/functions";
import { MongoClient } from "mongodb";
import { adminHandler } from "../shared/admin-handler";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

async function get(client: MongoClient) {
  try {
    const db = await client.db(process.env.MONGO_DB_NAME);
    const promises = [db.collection("events").countDocuments()];

    const [eventsCount] = await Promise.all(promises);

    return jsonResponse({
      status: 200,
      body: { events: eventsCount, news: 0, projects: 0 },
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

const handler: Handler = async (event, context) => {
  const handlers = [{ method: HTTP_METHODS.GET, handler: get }];

  return adminHandler({
    event,
    context,
    handlers,
    onlyAuthorizedUsers: true,
  });
};

export { handler };
