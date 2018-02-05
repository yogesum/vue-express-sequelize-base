const express = require('express');
const { index, show, create, update, destroy } = require('./user.controller');

const router = express.Router();

router.get('/', index);
router.get('/:id', show);

router.post('/', create);

router.put('/:id', update);
router.patch('/:id', update);

router.delete('/', destroy);

module.exports = router;
