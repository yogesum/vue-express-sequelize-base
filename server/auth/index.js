import express from 'express';
import LocalStrategy from './local/passport';
import User from '../api/user/user.model';
import local from './local';

const router = express.Router();

LocalStrategy.setup(User);
router.use('/local', local);
router.use('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default router;
