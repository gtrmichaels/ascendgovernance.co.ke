import { PrismaClient } from '@prisma/client';

// Use a global variable so that the PrismaClient is reused across
// lambda invocations in development and serverless environments.
const globalForPrisma = globalThis;

const prisma = globalForPrisma.__prismaClient ?? new PrismaClient();
if (!globalForPrisma.__prismaClient) globalForPrisma.__prismaClient = prisma;

export default prisma;
