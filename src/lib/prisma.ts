import { PrismaClient } from "../prisma/generated/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development")
  global.prisma = prisma;

export default prisma;
