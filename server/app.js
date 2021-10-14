import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import controller from './controller.js'

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

app.use(bodyParser())

app.use(controller())

app.listen(3001)

console.log('app started at port 3001 ...')
