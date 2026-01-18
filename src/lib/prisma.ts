import { PrismaClient } from "../prisma/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

declare global {
  var prisma: PrismaClient | undefined;
}

const connectionString = process.env.POSTGRES_PRISMA_URL;
if (!connectionString) {
  throw new Error("Missing POSTGRES_PRISMA_URL environment variable");
}

const pool = new Pool({
  connectionString,
});

const adapter = new PrismaPg(pool);

const prisma = global.prisma || new PrismaClient({ adapter });

if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development")
  global.prisma = prisma;

export default prisma;
