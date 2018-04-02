## Components

### errors.js
```js
// possible application error
const { StatusError } = require('./errors')

// http error 404 Not found
throw new StatusError(StatusError.NOT_FOUND, 'Resource not found')

// http error 409 Conflict
throw new StatusError(StatusError.CONFLICT, 'Resource already present')
```

### resource-route.js
```js
// example resource-route configuration
const resoureceRoute = require('./resource-route')

resourceRoute('user', {  // request routeIdentifier
  id: 'userResource',    // idParam eg. /users/:userResource
  load,                  // loads data for :userResource and attach to req
  index,                 // GET /users
  create,                // POST /users
  show,                  // GET /users/:userResource
  update,                // PUT /users/:userResource
  patch,                 // PATCH /users/:userResource
  destroy,               // DELETE /users/:userResource

  updateRoot,            // PUT /users
  patchRoot,             // PATCH /users
  deleteRoot,            // DELETE /users

  subresourcesRoot: {    // all values should be resourceRoute Object
    dashboard,           // mounts at /users/dashboard
    report,              // mounts at /users/report
  },

  subresources: {
    posts,               // mounts at /users/:userResource/posts
    comments,            // mounts at /users/:userResource/comments
  },
})
```
