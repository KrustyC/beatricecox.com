import { Handler } from "@netlify/functions";
import { adminHandler } from "../shared/admin-handler";
import axios from "axios";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

const NETLIFY_BUILD_HOOK_URL = `https://api.netlify.com/build_hooks/${process.env.DEPLOY_HOOK_KEY}`;

async function post() {
  try {
    await axios.post(NETLIFY_BUILD_HOOK_URL);

    return jsonResponse({
      status: 200,
      body: { message: "Build succesfully triggered" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error triggering build, please try again later on.",
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
