const index = async (ctx) => {
  ctx.response.body = `success!`
}

const hello = async (ctx) => {
  let name = ctx.params.name
  ctx.response.body = `hello, ${name}!`
}

export default {
  'GET /': index,
  'GET /hello/:name': hello
}
