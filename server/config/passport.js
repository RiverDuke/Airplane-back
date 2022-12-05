const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const knex = require("./database");
const validPassword = require("../utils/passUtils");

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback = (username, password, done) => {
  knex("users")
    .select("*")
    .where({ username: username })
    .first()
    .then((user) => {
      if (!user) {
        return done(null, false);
      }

      const isValid = validPassword(password, user.hash, user.salt);

      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => {
      done(err);
    });
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  knex("users")
    .select("*")
    .where({ userId: userId })
    .first()
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
