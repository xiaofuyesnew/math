import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const deal = async (fn) =>
  await fn()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect())

export const create = async () => {}

export const del = async () => {}

export const update = async () => {}

export const query = async () => {}

export default deal
