const router = require('koa-router')()

router.post('/login', async (ctx, next) => {
  const reqBody = ctx.request.body
  const data = {
    login: true,
    token: 'no_token'
  }
  ctx.body = JSON.stringify(data)
})

module.exports = router
