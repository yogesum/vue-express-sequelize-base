import express from 'express';

const router = express.Router();

// POST /api/login to log in the user and add him to the req.session.authUser
router.post('/login', (req, res) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' };
    return res.json({ username: 'demo' });
  }

  return res.status(401).json({ error: 'Bad credentials' });
});

// POST /api/logout to log out the user and remove it from the req.session
router.post('/logout', (req, res) => {
  delete req.session.authUser;
  res.json({ ok: true });
});

router.get('/user', (req, res) => {
  res.json(req.session);
});

export default router;
