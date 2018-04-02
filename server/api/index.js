const express = require('express')

const resourceRoute = require('../components/resource-route')
const user = require('./user')

const router = express.Router()

router.use('/users', resourceRoute('user', user))

module.exports = router
