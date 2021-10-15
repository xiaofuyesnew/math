import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import koaRouter from 'koa-router'

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname)

const addMapping = (router, mapping) => {
  for (let url in mapping) {
    if (url.startsWith('GET ')) {
      let path = url.substring(4)
      router.get(path, mapping[url])
      console.log(`register URL mapping: GET ${path}`)
    } else if (url.startsWith('POST ')) {
      let path = url.substring(5)
      router.post(path, mapping[url])
      console.log(`register URL mapping: POST ${path}`)
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}

const addControllers = async (router) => {
  let files = fs.readdirSync(`${__dirname}/controllers`)
  console.log(files)
  let js_files = files.filter((f) => {
    return f.endsWith('.js')
  })

  for (let f of js_files) {
    const mapping = await import(`file://${__dirname}/controllers/${f}`)
    addMapping(router, mapping.default)
  }
}

const controller = (dir = 'controllers') => {
  const router = koaRouter()
  addControllers(router, dir)
  return router.routes()
}

export default controller
