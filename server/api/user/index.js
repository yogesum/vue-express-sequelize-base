const User = require('./model')

const id = 'resourceUser' // since res.user is set by passport

async function index() {
  const data = await User.findAll()
  return { data }
}

async function load({ params }) {
  return User.findById(params[id])
}

async function show({ resourceUser }) {
  return { data: resourceUser }
}

async function create({ body }) {
  const data = await new User(body).save()
  return { data }
}

async function update({ body, resourceUser }) {
  await resourceUser.update(body)
  return { data: resourceUser }
}

async function destroy({ resourceUser }) {
  await resourceUser.destroy()
  return { ok: true }
}

module.exports = {
  id,
  index,
  load,
  show,
  create,
  update,
  destroy,
}
