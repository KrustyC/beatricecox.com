import {
  HandlerContext,
  HandlerEvent,
  HandlerResponse,
} from "@netlify/functions";
import { MongoClient } from "mongodb";
import { HTTP_METHODS } from "./variables";
import { connect } from "./mongodb-client";
import { jsonResponse } from "./utils";

type HandlerConfig = {
  method: HTTP_METHODS;
  handler: (
    client: MongoClient,
    handlerEvent: HandlerEvent
  ) => Promise<HandlerResponse>;
};

type Config = {
  event: HandlerEvent;
  context: HandlerContext;
  handlers: HandlerConfig[];
  onlyAuthorizedUsers?: boolean;
};

export async function adminHandler({
  event,
  context,
  handlers,
  onlyAuthorizedUsers,
}: Config): Promise<HandlerResponse> {
  if (onlyAuthorizedUsers) {
    const { user } = context.clientContext as { user?: any };

    if (!user) {
      return jsonResponse({
        status: 403,
        body: { message: "Only authorized users can perform this request" },
      });
    }
  }

  const methodHandler = handlers.find(
    (handler) => handler.method === event.httpMethod
  );

  if (!methodHandler) {
    return jsonResponse({
      status: 405,
      body: { message: "Method not allowed" },
    });
  }

  let client;

  try {
    client = await connect();
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error connecting to the database, please try again later on.",
      },
    });
  }

  if (!client) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error connecting to the database, please try again later on.",
      },
    });
  }

  return methodHandler.handler(client, event);
}
