const router = require('koa-router')()

router.post('/post', async (ctx, next) => {
  const reqBody = ctx.request.body
  console.log(ctx)
  const data = {
    sg: 'sg'
  }
  ctx.body = JSON.stringify(data)
})

module.exports = router


const state = {
  login: {
    state: false,
    token: "token",
  },
  state: {
    pager: {
      size: 20,
      num: 1
    }
  },
  data: {
    chart: {
      article: {
        '1st': {
          description: '',
          main: '',
          comment: {
            '1stC': ''
          }
        }
      }
    },
    Map: {
      article: {
        '1st': {
          main: '',
          comment: {
            '1stC': ''
          }
        }
      }
    },
    algorithm: {
      article: {
        '1st': {
          main: '',
          comment: {
            '1stC': ''
          }
        }
      }
    },
    life: {
      article: {
        '1st': {
          main: '',
          comment: {
            '1stC': ''
          }
        }
      }
    }
  }
}