const bcrypt = require('bcrypt');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

async function localAuthenticate(User, email, password, done) {
  const user = await User.find({ where: { email } });

  if (!user) return done(null, false, { message: 'This email is not registered.' });

  try {
    const authenticated = await bcrypt.compare(password, user.password);

    if (authenticated) return done(null, user);
    return done(null, false, { message: 'This password is not correct.' });
  } catch (err) {
    return done(err);
  }
}

module.exports = {
  setup(User) {
    passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
    }, (email, password, done) => localAuthenticate(User, email, password, done)));


    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));
  },
};
