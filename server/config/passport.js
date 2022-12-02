const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const knex = require("./database");
const validPassword = require("../utils/passUtils");

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback = (username, password, done) => {};
