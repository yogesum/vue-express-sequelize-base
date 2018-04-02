const { Nuxt, Builder } = require('nuxt')
const { env } = require('config')

const config = require('../../nuxt.config')

const logger = console

// Set Nuxt.js options
config.dev = !(env === 'production')

// Instantiate nuxt.js
const nuxt = new Nuxt(config)

// Build in development
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build().catch((e) => {
    logger.error(e)
    process.exit(1)
  })
}

module.exports = nuxt
