import { PrismaClient } from '@prisma/client';

console.time('[prisma] module import');
// Use a global variable so that the PrismaClient is reused across
// lambda invocations in development and serverless environments.
const globalForPrisma = globalThis;

console.time('[prisma] client init start');
const prisma = globalForPrisma.__prismaClient ?? new PrismaClient();
console.timeEnd('[prisma] client init start');
if (!globalForPrisma.__prismaClient) globalForPrisma.__prismaClient = prisma;

console.timeEnd('[prisma] module import');

export default prisma;
