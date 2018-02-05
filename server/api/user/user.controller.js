const User = require('./user.model');

exports.index = async function index(req, res) {
  try {
    const data = await User.findAll();
    res.json({ data });
  } catch (e) {
    res.json(e.stack);
  }
};

exports.show = async function show(req, res) {
  const data = await User.findById(req.param.id);
  res.json({ data });
};

exports.create = async function create(req, res) {
  const data = await new User(req.body).save();
  res.status(201).json({ data });
};

exports.update = async function update(req, res) {
  const data = await User.findById(req.param.id);
  await data.update(req.body);
  res.json({ data });
};

exports.destroy = async function destroy(req, res) {
  await User.destroy({ where: { id: req.param.id } });
  res.json({ ok: true });
};

