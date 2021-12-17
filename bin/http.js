#!/usr/bin/env node
const Koa = require('koa2')
const path = require('path')
const serve = require('koa-static')
const app = new Koa()
const argv = process.argv.slice(2)
const name = argv[0]

// 端口号
const port = 10003
// 静态资源处理
app.use(serve(path.join(process.cwd(), name || '')))

app.listen(port, () => {
  console.log('端口指向目录', path.join(process.cwd(), name || ''))
  console.log(`Server in running at http://localhost:${port}`)
})
