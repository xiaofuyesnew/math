const { prisma, query } = require('../db')

const index = async (ctx) => {
  ctx.response.body = `success!`
}

const hello = async (ctx) => {
  let name = ctx.params.name
  ctx.response.body = `hello, ${name}!`
}

const newOne = async (ctx) => {
  ctx.response.body = `new!`
}

const updateQuiz = async (ctx, next) => {
  const reqBody = ctx.request.body
  const { origin } = reqBody
  if (origin) {
    console.log(origin)
    let queryArr = []

    for (let i = 0; i < origin.length; i++) {
      const item = origin[i]
      const description = `${item.num1}${item.method === 'plus' ? '+' : '-'}${
        item.num2
      }=`
      let question = null
      question = await query(async () => {
        return await prisma.question.findUnique({
          where: {
            description,
          },
          select: {
            id: true,
            description: true,
            content: true,
            createdAt: false,
            updatedAt: false,
            count: false,
          },
        })
      })
      if (question === null) {
        question = await prisma.question.create({
          data: {
            description,
            content: origin[i],
          },
          select: {
            id: true,
            description: true,
            content: true,
            createdAt: false,
            updatedAt: false,
            count: false,
          },
        })
      }
      console.log(question)
      queryArr.push({ description })
    }

    ctx.response.body = {
      success: true,
      data: origin,
      msg: 'success',
    }
    await next()
  } else {
    ctx.response.body = {
      success: false,
      msg: 'missing param <origin>',
    }
    await next()
  }
}

module.exports = {
  'GET /': index,
  'GET /hello/:name': hello,
  'GET /new': newOne,
  'POST /updateQuiz': updateQuiz,
}
