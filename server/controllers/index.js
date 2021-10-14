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

export default {
  'GET /': index,
  'GET /hello/:name': hello,
  'GET /new': newOne
}
