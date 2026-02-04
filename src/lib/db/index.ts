import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { env } from "../env";

import * as schema from "./schema";

declare global {
  var db: ReturnType<typeof drizzle<typeof schema>> | undefined;
}

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl:
    env.NEXT_PUBLIC_ENVIRONMENT === "local"
      ? false
      : { rejectUnauthorized: false },
});

export const db = global.db || drizzle(pool, { schema });

if (env.NEXT_PUBLIC_ENVIRONMENT === "local") {
  global.db = db;
}

export { schema };
