import { Handler, HandlerEvent } from "@netlify/functions";
import netlifyIdentity from "netlify-identity-widget";
import { jsonResponse } from "../shared/utils";
import {
  FOLDERS,
  getAllS3Files,
  deleteObjectFromS3,
} from "../shared/s3-client";

async function get() {
  try {
    const params = {
      Bucket: process.env.S3_OUR_HUT_BUCKET as string,
      Prefix: `${FOLDERS.PARTNERS_LOGOS}/`,
    };

    const listObjects = await getAllS3Files(params);

    const partnerLogosUrls =
      listObjects?.Contents?.filter((file) => {
        return file.Size > 0;
      }).map((file) => {
        return `https://${process.env.S3_OUR_HUT_BUCKET}.s3.amazonaws.com/${file.Key}`;
      }) || [];

    return jsonResponse({
      status: 200,
      body: { partnerLogos: partnerLogosUrls },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching partners, please try again later on.",
      },
    });
  }
}

async function deleteImage(handlerEvent: HandlerEvent) {
  try {
    const { name } = handlerEvent.queryStringParameters as { name?: string };

    const params = {
      Bucket: process.env.S3_OUR_HUT_BUCKET as string,
      Key: `/${FOLDERS.PARTNERS_LOGOS}/${name}`,
    };

    await deleteObjectFromS3(params);

    return jsonResponse({
      status: 200,
      body: { message: "Partner Logo successfully deleted!" },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching partner logos, please try again later on.",
      },
    });
  }
}

const handler: Handler = async (event, context) => {
  const { user } = context.clientContext as { user?: netlifyIdentity.User };

  if (!user) {
    return jsonResponse({
      status: 403,
      body: { message: "Only authorized users can perform this request" },
    });
  }

  if (event.httpMethod === "GET") {
    return get();
  }

  if (event.httpMethod === "DELETE") {
    return deleteImage(event);
  }

  return jsonResponse({
    status: 405,
    body: { message: "Method not allowed" },
  });
};

export { handler };
