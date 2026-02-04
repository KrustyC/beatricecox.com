import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

import "dotenv/config";

export const env = createEnv({
  server: {
    SANITY_API_READ_TOKEN: z.string().min(1),
    DRAFT_MODE_SECRET_TOKEN: z.string().min(1),
    PROJECT_PASSWORD_COOKIE_SECRET: z.string().min(1),
    REBUILD_PROJECTS_INDEX_API_KEY: z.string().min(1),
    DATABASE_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_ENVIRONMENT: z.enum(["local", "production"]),
    NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
    NEXT_PUBLIC_SANITY_DATASET: z.string().min(1),
    NEXT_PUBLIC_SANITY_API_VERSION: z.string().min(1),
    NEXT_PUBLIC_BASE_URL: z.string().min(1),
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  },
});
