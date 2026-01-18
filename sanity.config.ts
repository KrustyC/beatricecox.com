'use client';

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./src/sanity/schemas";
import { projectId, dataset } from "./src/sanity/env";

export default defineConfig({
  basePath: '/studio',

  projectId,
  dataset,

  name: 'default',
  title: 'beatricecox.com',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
