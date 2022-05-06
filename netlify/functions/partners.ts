import { Handler } from "@netlify/functions";
import { jsonResponse } from "../shared/utils";
import { FOLDERS, getAllS3Files } from "../shared/s3-client";
import { HTTP_METHODS } from "../shared/variables";

async function get() {
  try {
    const params = {
      Bucket: process.env.S3_BEATRICECOX_BUCKET as string,
      Prefix: `${FOLDERS.PARTNERS_LOGOS}/`,
    };

    const listObjects = await getAllS3Files(params);

    const partnerLogosUrls =
      listObjects?.Contents?.filter((file) => {
        return file.Size > 0;
      }).map((file) => {
        return `https://${process.env.S3_BEATRICECOX_BUCKET}.s3.amazonaws.com/${file.Key}`;
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

const handler: Handler = async (event) => {
  if (event.httpMethod !== HTTP_METHODS.GET) {
    return jsonResponse({
      status: 405,
      body: { message: "Method not allowed" },
    });
  }

  return get();
};

export { handler };
