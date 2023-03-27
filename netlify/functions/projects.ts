import { Handler, HandlerEvent } from "@netlify/functions";
import { jsonResponse } from "../shared/utils";
import { connect } from "../shared/mongodb-client";
import { HTTP_METHODS } from "../shared/variables";

const PROJECTS_COLLECTION = "projects";

async function get(event: HandlerEvent) {
  try {
    const client = await connect();
    if (!client) {
      throw new Error("Can not connect to DB");
    }

    const { slug: searchSlug } = event.queryStringParameters as {
      slug?: string;
    };
    if (searchSlug) {
      const project = await client
        .db(process.env.MONGO_DB_NAME)
        .collection(PROJECTS_COLLECTION)
        .findOne({ slug: searchSlug, draft: false });

      if (!project) {
        return jsonResponse({
          status: 404,
          body: {
            message: "Project not found",
          },
        });
      }

      const {
        passwordForProtection,
        isPasswordProtected,
        slug,
        title,
        mainImage,
        ...rest
      } = project;

      return jsonResponse({
        status: 200,
        body: {
          project: {
            slug,
            title,
            mainImage,
            isPasswordProtected,
            ...(!isPasswordProtected ? rest : {}),
          },
          prevSlug: "",
          nextSlug: "",
        },
      });
    }

    const projects = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(PROJECTS_COLLECTION)
      .find({ draft: false })
      .toArray();

    projects.sort((a, b) => a.order - b.order);

    return jsonResponse({
      status: 200,
      body: {
        projects: projects.map((project) => {
          // Filter out the password to avoid exposing it to the client
          const { passwordForProtection, ...rest } = project;

          return rest;
        }),
      },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching projects, please try again later on.",
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

  return get(event);
};

export { handler };
