const express = require('express')
const LocalStrategy = require('./local/passport')
const User = require('../api/user/model')
const local = require('./local')

const router = express.Router()

LocalStrategy.setup(User)
router.use('/local', local)
router.use('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
