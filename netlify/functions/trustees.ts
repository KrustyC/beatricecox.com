import { Handler } from "@netlify/functions";
import { jsonResponse } from "../shared/utils";
import { connect } from "../shared/mongodb-client";
import { HTTP_METHODS } from "../shared/variables";

const TRUSTEES_COLLECTION = "trustees";

async function get() {
  try {
    const client = await connect();

    if (!client) {
      throw new Error("Can not connect to DB");
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

const handler: Handler = async (event) => {
  if (event.httpMethod !== HTTP_METHODS.GET) {
    return jsonResponse({
      status: 405,
      body: { message: "Method not allowed" },
    });
  }

  return get();
};

export { handler };
