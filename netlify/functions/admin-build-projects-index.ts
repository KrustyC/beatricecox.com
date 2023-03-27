import { Handler } from "@netlify/functions";
import { MongoClient, ObjectId } from "mongodb";
import { adminHandler } from "../shared/admin-handler";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

const PROJECTS_COLLECTION = "projects";

async function post(client: MongoClient) {
  try {
    const projects = await client
      .db(process.env.MONGO_DB_NAME)
      .collection(PROJECTS_COLLECTION)
      .find({ draft: false })
      .toArray();

    const promises = projects.map(async (project, i) => {
      const nextId = i === projects.length - 1 ? 0 : i + 1;
      const prevId = i > 0 ? i - 1 : projects.length - 1;

      const prevProject = projects[prevId];
      const nextProject = projects[nextId];

      await client
        .db(process.env.MONGO_DB_NAME)
        .collection(PROJECTS_COLLECTION)
        .findOneAndUpdate(
          {
            _id: new ObjectId(project._id),
          },
          {
            $set: {
              prevProject: {
                slug: prevProject.slug,
                title: prevProject.title,
                category: projects[prevId].category,
              } as unknown as undefined, // This is some bullshit with the type of $set
              nextProject: {
                slug: nextProject.slug,
                title: nextProject.title,
                category: nextProject.category,
              } as unknown as undefined, // This is some bullshit with the type of $set,
            },
          }
        );
    });

    await Promise.all(promises);

    return jsonResponse({
      status: 200,
      body: { message: "Indexes succesfully built" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error building indexes for your project.",
      },
    });
  }
}

const handler: Handler = async (event, context) => {
  const handlers = [{ method: HTTP_METHODS.POST, handler: post }];

  return adminHandler({
    event,
    context,
    handlers,
    onlyAuthorizedUsers: true,
  });
};

export { handler };
