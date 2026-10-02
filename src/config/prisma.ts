import { PrismaClient } from "@prisma/client/extension";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Reuses the existing client instance if it exists, otherwise creates a new one
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // Optional: logs queries for easy debugging
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
