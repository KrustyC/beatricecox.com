import { Handler, HandlerEvent } from "@netlify/functions";
import { jsonResponse } from "../shared/utils";
import { ObjectId } from "mongodb";
import { connect } from "../shared/mongodb-client";
import { HTTP_METHODS } from "../shared/variables";

const PROJECTS_COLLECTION = "projects";

const HARDCODED_PROJECTS = [
  {
    _id: 1,
    img: "",
    title: "Babingtons Blends",
    category: "UI/UX Design",
    year: 2018,
  },
  {
    _id: 2,
    img: "",
    title: "Babingtons Rome",
    category: "UI/UX Design",
    year: 2018,
  },
  {
    _id: 3,
    img: "",
    title: "Salty Commune",
    category: "Interior Branding",
    year: 2018,
  },
  {
    _id: 4,
    img: "",
    title: "Castello di Spessa",
    category: "UI/UX Design",
    year: 2018,
  },
  {
    _id: 5,
    img: "",
    title: "Art Game",
    category: "UI/UX Design",
    year: 2018,
  },
  {
    _id: 6,
    img: "",
    title: "Bervini",
    category: "UI/UX Design",
    year: 2018,
  },
];

async function get(event: HandlerEvent) {
  try {
    const client = await connect();
    if (!client) {
      throw new Error("Can not connect to DB");
    }

    const { id } = event.queryStringParameters as { id?: string };

    if (id) {
      const project = await client
        .db(process.env.MONGO_DB_NAME)
        .collection(PROJECTS_COLLECTION)
        .findOne({ _id: new ObjectId(id) });

      if (!project) {
        return jsonResponse({
          status: 404,
          body: {
            message: "Project not found",
          },
        });
      }

      return jsonResponse({
        status: 200,
        body: { project },
      });
    }

    // const projects = await client
    //   .db(process.env.MONGO_DB_NAME)
    //   .collection(PROJECTS_COLLECTION)
    //   .find()
    //   .toArray();

    // projects.sort((a, b) =>
    //   a.order > b.order ? 1 : b.order > a.order ? -1 : 0
    // );

    return jsonResponse({
      status: 200,
      body: { projects: HARDCODED_PROJECTS },
    });
  } catch (error) {
    console.log(error);
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
