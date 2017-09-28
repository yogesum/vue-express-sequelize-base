import bodyParser from 'body-parser';
import session from 'express-session';
import api from '../api';

export default function expressSetup(app, render) {
  app.set('env', process.env.NODE_ENV || 'development');

  // Body parser, to access req.body
  app.use(bodyParser.json());

  // Sessions to create req.session
  app.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  }));

  app.use('/api', api);
  app.use(render);
}
