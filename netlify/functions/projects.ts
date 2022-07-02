import { Handler, HandlerEvent } from "@netlify/functions";
import { jsonResponse } from "../shared/utils";
import { connect } from "../shared/mongodb-client";
import { HTTP_METHODS } from "../shared/variables";
import { Project } from "../../src/types/global";
import { ProjectCategory } from "../../src/types/app";

const PROJECTS_COLLECTION = "projects";

const HARDCODED_PROJECTS: Project[] = [
  {
    _id: 1,
    img: "",
    slug: "babington-blends",
    title: "Babingtons Blends",
    category: ProjectCategory.UX_UI,
    year: 2018,
    intro: "",
    description: "",
    images: [],
  },
  {
    _id: 2,
    img: "",
    slug: "babington-rome",
    title: "Babingtons Rome",
    category: ProjectCategory.UX_UI,
    year: 2018,
    intro: "",
    description: "",
    images: [],
  },
  {
    _id: 3,
    img: "",
    slug: "salty-commune",
    title: "Salty Commune",
    category: ProjectCategory.UX_UI,
    year: 2018,
    intro: "",
    description: "",
    images: [],
  },
  {
    _id: 4,
    img: "",
    slug: "castello-di-spessa",
    title: "Castello di Spessa",
    category: ProjectCategory.UX_UI,
    year: 2018,
    intro: "",
    description: "",
    images: [],
  },
  {
    _id: 5,
    img: "",
    slug: "art-game",
    title: "Art Game",
    category: ProjectCategory.UX_UI,
    year: 2018,
    intro: "",
    description: "",
    images: [],
  },
  {
    _id: 6,
    img: "",
    slug: "bervini",
    title: "Bervini",
    category: ProjectCategory.UX_UI,
    year: 2018,
    intro: "",
    description: "",
    images: [],
  },
];

async function get(event: HandlerEvent) {
  try {
    const client = await connect();
    if (!client) {
      throw new Error("Can not connect to DB");
    }

    const { slug } = event.queryStringParameters as { slug?: string };

    if (slug) {
      const project = HARDCODED_PROJECTS.find((project) => {
        return project.slug === slug;
      });
      // const project = await client
      //   .db(process.env.MONGO_DB_NAME)
      //   .collection(PROJECTS_COLLECTION)
      //   .findOne({ slug });

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
        body: { project, prevSlug: "", nextSlug: "" },
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
