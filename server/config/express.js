const helmet = require('helmet')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const passport = require('passport')
const { env, session } = require('config')

const auth = require('../auth')
const api = require('../api')
const { errorHandler } = require('../components/middlewares')

module.exports = function expressSetup(app) {
  app.set('env', env)
  app.use(helmet())

  // Body parser, to access req.body
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  // Sessions to create req.session
  app.use(expressSession(session))

  app.use(passport.initialize())
  app.use(passport.session())

  app.use('/auth', auth)
  app.use('/api', api)
  app.use(errorHandler)
}
