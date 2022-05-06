import { Handler } from "@netlify/functions";
import { jsonResponse } from "../shared/utils";
import { connect } from "../shared/mongodb-client";
import { HTTP_METHODS } from "../shared/variables";

const PRODUCTS_COLLECTION = "products";

async function get() {
  try {
    const client = await connect();

    if (!client) {
      throw new Error("Can not connect to DB");
    }

    const products = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(PRODUCTS_COLLECTION)
      .find()
      .toArray();

    products.sort((a, b) =>
      a.order > b.order ? 1 : b.order > a.order ? -1 : 0
    );

    return jsonResponse({
      status: 200,
      body: { products },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching products, please try again later on.",
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
