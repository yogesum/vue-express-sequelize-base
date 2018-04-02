const express = require('express')
const { host, port } = require('config')

const expressSetup = require('./config/express')
const nuxt = require('./config/nuxt')
const db = require('./db')

const app = express()

expressSetup(app)
app.use(nuxt.render) // render with nuxt
app.listen(port, host) // start http listner

db.setup() // setup association between models

const logger = console
logger.log(`Server listening on ${host}:${port}`)
