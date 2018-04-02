function identifyRoute(routeIdenitfier) {
  return (req, res, next) => {
    Object.assign(req, { routeIdenitfier })
    next()
  }
}

function errorHandler(err, req, res, next) {
  if (!res.headersSent && !req.accepts(['html', 'text'])) {
    res
      .status(err.status || 500)
      .json({ message: err.message, stack: err.stack })
  }

  next(err)
}

module.exports = {
  identifyRoute,
  errorHandler,
}
