import test from 'ava';
import { Nuxt, Builder } from 'nuxt';
import { resolve } from 'path';

const logger = console;

// We keep a reference to nuxt so we can close
// the server at the end of the test
let nuxt = null;

// Init Nuxt.js and start listening on localhost:4000
test.before('Init Nuxt.js', async () => {
  const rootDir = resolve(__dirname, '..');
  let config = {};
  try { // eslint-disable-next-line global-require, import/no-dynamic-require
    config = await require(resolve(rootDir, 'nuxt.config.js'));
  } catch (e) {
    logger.warn('nuxt.config.js not found');
  }

  config.rootDir = rootDir; // project folder
  config.dev = false; // production build
  nuxt = new Nuxt(config);
  await new Builder(nuxt).build();
  nuxt.listen(4000, 'localhost');
});

test('Route / exits and render HTML', async (t) => {
  const email = 'yogesum@gmail.com';
  const context = { req: { user: { id: 1, email } } };
  const { html } = await nuxt.renderRoute('/', context);
  t.true(html.includes(email));
});

// Close the nuxt server
test.after('Closing server', () => {
  nuxt.close();
});
