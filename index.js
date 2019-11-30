const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const router = new Router()
const sum =require('./sum')

router.get('/add/:a/:b', (ctx, next) => {
  const result = sum(parsefloat(ctx.params.a),parsefloat(ctx.params.b))
  return ctx.body = {result}
})

app.use(router.routes())
 .use(router.allowedmethods())

app.listen(process.env.PORT || 3000) 
