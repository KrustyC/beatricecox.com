import { Handler, HandlerEvent } from "@netlify/functions";
import { MongoClient, ObjectId } from "mongodb";
import * as yup from "yup";
import { adminHandler } from "../shared/admin-handler";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

export const productSchema = yup.object().shape({
  name: yup.string().required("please enter a name for the product"),
  description: yup
    .string()
    .required("please enter a description for the product"),
  image: yup.string().required("please enter an image for the product"),
  price: yup
    .number()
    .positive("please enter a valid price")
    .required("please enter a price"),
  etsyLink: yup.string().url().required("please enter a valid Etsy link"),
});

const PRODUCTS_COLLECTION = "products";

async function get(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { id } = handlerEvent.queryStringParameters as { id?: string };

    if (id) {
      const product = await client
        .db(process.env.MONGO_DB_NAME)
        .collection(PRODUCTS_COLLECTION)
        .findOne({ _id: new ObjectId(id) });

      if (!product) {
        return jsonResponse({
          status: 404,
          body: {
            message: `Product with id "${id}" could not be found`,
          },
        });
      }

      return jsonResponse({
        status: 200,
        body: { product },
      });
    }

    const products = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(PRODUCTS_COLLECTION)
      .find()
      .toArray();

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

async function post(client: MongoClient, handlerEvent: HandlerEvent) {
  try {
    const { product = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let productDocument;

    try {
      productDocument = await productSchema.validate(product);
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
      .collection(PRODUCTS_COLLECTION)
      .insertOne({
        ...productDocument,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    return jsonResponse({
      status: 200,
      body: { message: "Product successfully added", id: result.insertedId },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message:
          "Error adding your product to the database, please try again later on.",
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

    const { product = null } = handlerEvent.body
      ? JSON.parse(handlerEvent.body)
      : {};

    let productDocument;

    try {
      productDocument = await productSchema.validate(product);
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
      .collection(PRODUCTS_COLLECTION)
      .findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            name: productDocument.name,
            description: productDocument.description,
            image: productDocument.image,
            price: productDocument.price,
            etsyLink: productDocument.etsyLink,
            updatedAt: new Date(),
          },
        }
      );

    return jsonResponse({
      status: 200,
      body: { message: "Product successfully updated" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error updating your product, please try again later on.",
      },
    });
  }
}

async function deleteProduct(client: MongoClient, handlerEvent: HandlerEvent) {
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
      .collection(PRODUCTS_COLLECTION)
      .deleteMany({
        _id: new ObjectId(id),
      });

    return jsonResponse({
      status: 200,
      body: { message: "Product successfully deleted" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error deleting the product, please try again later on.",
      },
    });
  }
}
const handler: Handler = async (event, context) => {
  const handlers = [
    { method: HTTP_METHODS.GET, handler: get },
    { method: HTTP_METHODS.POST, handler: post },
    { method: HTTP_METHODS.PUT, handler: put },
    { method: HTTP_METHODS.DELETE, handler: deleteProduct },
  ];

  return adminHandler({
    event,
    context,
    handlers,
    onlyAuthorizedUsers: true,
  });
};

export { handler };
