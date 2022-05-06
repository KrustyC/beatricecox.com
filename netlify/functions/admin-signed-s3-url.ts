import { Handler } from "@netlify/functions";
import { jsonResponse } from "../shared/utils";
import { getS3Client, FOLDERS } from "../shared/s3-client";

const URL_EXPIRATION_SECONDS = 300;

interface QueryStringParameters {
  name?: string;
  type?: string;
  folder?: string;
}

const handler: Handler = async function (event, context) {
  if (event.httpMethod !== "GET") {
    return jsonResponse({
      status: 405,
      body: { message: "Method not allowed" },
    });
  }

  const { user } = context.clientContext as { user?: any };

  if (!user) {
    return jsonResponse({
      status: 403,
      body: { message: "Only authorized users can perform this request" },
    });
  }

  const {
    name: Key,
    type: ContentType,
    folder,
  } = event.queryStringParameters as QueryStringParameters;

  // Get signed URL from S3
  const s3Params = {
    Bucket: process.env.S3_OUR_HUT_BUCKET,
    Key: `${folder}/${Key}`,
    Expires: URL_EXPIRATION_SECONDS,
    ContentType,
    ACL: "public-read",
  };

  const s3 = getS3Client();
  const uploadURL = await s3.getSignedUrlPromise("putObject", s3Params);

  return jsonResponse({
    status: 200,
    body: { uploadURL: uploadURL, Key },
  });
};

export { handler };
