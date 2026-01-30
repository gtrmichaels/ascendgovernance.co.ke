import { PrismaClient } from '@prisma/client';

// Lazy-initialize Prisma client to avoid heavy work during module import
let prisma = null;
const globalForPrisma = globalThis;

export async function getPrisma() {
	if (globalForPrisma.__prismaClient) return globalForPrisma.__prismaClient;

	console.time('[prisma] create client');
	prisma = new PrismaClient();
	globalForPrisma.__prismaClient = prisma;
	console.timeEnd('[prisma] create client');

	return prisma;
}

// For backwards-compatibility (synchronous import), export a default getter
export default {
	get: () => getPrisma()
};
