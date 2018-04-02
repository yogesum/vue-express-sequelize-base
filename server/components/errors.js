const { STATUS_CODES } = require('http')

class StatusError extends Error {
  constructor(status, message = STATUS_CODES[status] || STATUS_CODES['500'], ...args) {
    super(message, ...args)
    this.status = status || 500
    this.name = 'StatusError'

    Error.captureStackTrace(this, StatusError)
  }
}

Object.assign(StatusError, [...Object.entries(STATUS_CODES)].reduce(
  (accum, [code, message]) => ({
    ...accum,
    [message.replace(/\W+/g, '_').toUpperCase()]: Number(code),
  }),
  {},
))

module.exports = {
  StatusError,
}
