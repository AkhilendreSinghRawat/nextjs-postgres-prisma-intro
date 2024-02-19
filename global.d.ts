import { PrismaClient } from '@prisma/client';

// Extend the NodeJS global type with the prisma property
declare global {
  var prisma: PrismaClient | undefined;
}

export {};