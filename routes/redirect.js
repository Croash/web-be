const router = require('koa-router')()

router.get('/redirect', async (ctx, next) => {
  ctx.redirect('/');
  // ctx.body = '<a href="/">Index Page</a>';
})

module.exports = router
