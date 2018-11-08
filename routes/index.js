const login = require('./login')
const indexPage = require('./indexPage')
const redirect = require('./redirect')
const users = require('./users')
const postPage = require('./postPage')

const router = {
  login,
  indexPage,
  redirect,
  users,
  postPage,
}

module.exports = router
