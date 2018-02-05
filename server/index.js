const { Nuxt, Builder } = require('nuxt');
const express = require('express');
const expressSetup = require('./config/express');
const db = require('./db');

// import api from './api';
const config = require('../nuxt.config');

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

  const watcher = require('chokidar').watch(__dirname); // eslint-disable-line
  watcher.on('ready', () => {
    watcher.on('all', () => {
      logger.log('Clearing server/ module cache from server');
      Object.keys(require.cache).forEach((id) => {
        if (new RegExp(__dirname).test(id)) delete require.cache[id];
      });
    });
  });
}

expressSetup(app, nuxt.render);
db.setup();

app.listen(port, host);
logger.log(`Server listening on ${host}:${port}`);
