const router = require('koa-router')()

router.get('/redirect', async (ctx, next) => {
  console.log('sgsgsgsg')
  // ctx.redirect('/');
  ctx.body = '<a href="/">Index Page</a>';
})

module.exports = router
