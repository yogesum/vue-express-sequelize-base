import { Nuxt, Builder } from 'nuxt';
import express from 'express';
import expressSetup from './config/express';

// import api from './api';
import config from '../nuxt.config';

const app = express();
const logger = console;
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

// Set Nuxt.js options
config.dev = !(app.env === 'production');

// Instantiate nuxt.js
const nuxt = new Nuxt(config);

// Build in development
if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build().catch((e) => {
    logger.error(e);
    process.exit(1);
  });
}

expressSetup(app, nuxt.render);

app.listen(port, host);
logger.log(`Server listening on ${host}:${port}`);
