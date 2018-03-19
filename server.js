const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()
const serve = require('koa-static')

const path = require('path')
const static = serve(path.join(__dirname))

const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<a href="/">Index Page</a>'
}

const main = ctx => {
  ctx.response.body = 'Hello World'
}


const one = (ctx, next) => {
  console.log('>> one')
  next()
  console.log('<< one')
}

const two = (ctx, next) => {
  console.log('>> two')
  next() 
  console.log('<< two')
}

const three = (ctx, next) => {
  console.log('>> three')
  next()
  console.log('<< three')
}

app.use(static)
app.use(route.get('/', main))
app.use(route.get('/about', about))

app.use(one)
app.use(two)
app.use(three)

app.listen(8081)
