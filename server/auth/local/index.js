const express = require('express')
const passport = require('passport')

const router = express.Router()

router.post('/', (req, res, next) => {
  res.format({
    html: passport.authenticate('local', {
      successReturnToOrRedirect: '/',
      failureRedirect: '/auth/login?error',
    }),

    json: passport.authenticate('local', (err, user, info) => {
      const error = err || info
      if (error) return res.status(401).json(error)

      if (user) {
        return req.login(user, (loginError) => {
          if (loginError) return next(loginError)
          return res.json({ data: user })
        })
      }

      return res.status(404)
        .json({ message: 'Something went wrong, please try again.' })
    }),
  })
})

module.exports = router
