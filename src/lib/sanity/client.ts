import { createClient } from "@sanity/client";

import { env } from "@/lib/env";

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: env.SANITY_API_READ_TOKEN,
});

export function getClient(preview?: boolean) {
  if (preview) {
    return createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: env.SANITY_API_READ_TOKEN,
      perspective: "previewDrafts",
    });
  }
  return client;
}
