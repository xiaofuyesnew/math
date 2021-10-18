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
  const { origin, condition } = reqBody
  if (origin && condition) {
    // console.log(origin)
    let queryArr = []

    for (let i = 0; i < origin.length; i++) {
      const item = origin[i]
      const description = `${item.num1}${item.method === 'plus' ? '+' : '-'}${
        item.num2
      }=`
      let question = null
      question = await query(
        async () =>
          await prisma.question.findUnique({
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
      )
      if (question === null) {
        question = await query(
          async () =>
            await prisma.question.create({
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
        )
      } else {
        query(
          async () =>
            await prisma.question.update({
              where: {
                id: question.id,
              },
              data: {
                count: {
                  increment: 1,
                },
              },
            })
        )
      }
      queryArr.push(question)
    }

    const quiz = await query(
      async () =>
        await prisma.quiz.create({
          data: {
            condition,
            content: queryArr.map((item) => item.id),
          },
        })
    )

    ctx.response.body = {
      success: true,
      data: {
        detail: queryArr,
        quizId: quiz.id,
      },
      msg: 'success',
    }
    await next()
  } else {
    ctx.response.body = {
      success: false,
      msg: 'missing param',
    }
    await next()
  }
}

const getQuizList = async (ctx, next) => {
  const list = await query(
    async () =>
      await prisma.quiz.findMany({
        select: {
          id: true,
          createdAt: false,
          updatedAt: false,
          content: true,
          condition: true,
          recordIds: true,
        },
      })
  )
  if (list === null) {
    ctx.response.body = {
      success: true,
      msg: 'success',
      data: [],
    }
  } else {
    ctx.response.body = {
      success: true,
      msg: 'success',
      data: list,
    }
  }

  await next()
}

const createRecord = async (ctx, next) => {
  
}


module.exports = {
  'POST /updateQuiz': updateQuiz,
  'GET /getQuizList': getQuizList,
}
