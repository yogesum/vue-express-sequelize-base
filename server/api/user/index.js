import express from 'express';
import { index, show, create, update, destroy } from './user.controller';

const router = express.Router();

router.get('/', index);
router.get('/:id', show);

router.post('/', create);

router.put('/:id', update);
router.patch('/:id', update);

router.delete('/', destroy);

export default router;
