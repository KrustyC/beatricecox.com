import { type ContentfulClientApi, createClient } from "contentful";

interface Options {
  preview?: boolean;
}

export function getContentfulClient({
  preview = false,
}: Options = {}): ContentfulClientApi<undefined> {
  return createClient({
    host: `${preview ? "preview" : "cdn"}.contentful.com`,
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: preview
      ? (process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string)
      : (process.env.CONTENTFUL_ACCESS_TOKEN as string),
  });
}
