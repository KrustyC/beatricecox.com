import path from "node:path";
import { defineConfig, env } from "prisma/config";

import "dotenv/config";

export default defineConfig({
  schema: path.join("src", "prisma", "schema.prisma"),
  migrations: {
    path: path.join("src", "prisma", "migrations"),
  },
  datasource: {
    url: env("POSTGRES_PRISMA_URL"),
  },
});
