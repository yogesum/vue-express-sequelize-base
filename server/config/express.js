const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const auth = require('../auth');
const api = require('../api');

module.exports = function expressSetup(app, render) {
  app.set('env', process.env.NODE_ENV || 'development');

  // Body parser, to access req.body
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Sessions to create req.session
  app.use(session({
    secret: 'super-secret-key',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/auth', auth);
  app.use('/api', api);
  app.use(render);
};
