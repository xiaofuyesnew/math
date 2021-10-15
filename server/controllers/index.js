import { default as deal, create, query } from '../db'

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

const updateQuiz = async (ctx) => {
  const reqBody = ctx.request.body
  console.log(typeof reqBody.test)
  ctx.response.body = {
    test: 1,
  }
}

module.exports = {
  'GET /': index,
  'GET /hello/:name': hello,
  'GET /new': newOne,
  'POST /updateQuiz': updateQuiz,
}
