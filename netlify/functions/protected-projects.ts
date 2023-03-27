import { Handler, HandlerEvent } from "@netlify/functions";
import { jsonResponse } from "../shared/utils";
import { connect } from "../shared/mongodb-client";
import { HTTP_METHODS } from "../shared/variables";

const PROJECTS_COLLECTION = "projects";

async function post(event: HandlerEvent) {
  try {
    const { slug = null, password = null } = event.body
      ? JSON.parse(event.body)
      : {};

    if (!slug || !password) {
      return jsonResponse({
        status: 400,
        body: {
          message: "Please provide both a `slug` and a `password`",
        },
      });
    }

    const client = await connect();
    if (!client) {
      throw new Error("Can not connect to DB");
    }

    const project = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(PROJECTS_COLLECTION)
      .findOne({ slug, passwordForProtection: password });

    if (!project) {
      return jsonResponse({
        status: 404,
        body: {
          message: "Project not found, or password incorrect",
        },
      });
    }

    const { passwordForProtection, ...rest } = project;
    return jsonResponse({
      status: 200,
      body: { project: rest },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching project, please try again later on.",
      },
    });
  }
}

const handler: Handler = async (event) => {
  if (event.httpMethod !== HTTP_METHODS.POST) {
    return jsonResponse({
      status: 405,
      body: { message: "Method not allowed" },
    });
  }

  return post(event);
};

export { handler };
