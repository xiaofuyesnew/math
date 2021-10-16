const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const query = async (fn) =>
  await fn()
    .catch((e) => console.error(e))
    .finally(async () => {
      await prisma.$disconnect()
    })

module.exports = {
  prisma,
  query
}
