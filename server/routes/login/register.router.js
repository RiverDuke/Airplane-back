const router = require("express").Router();
const passport = require("passport");
const genPassword = require("../../utils/passUtils").genPassword;
const knex = require("../../config/database");
const isAuth = require("../authMiddleware").isAuth;
const isAdmin = require("../authMiddleware").isAdmin;

router.route("/").post((req, res, next) => {
  const saltHash = genPassword(req.body.password);
  console.log(saltHash);
  console.log(req.body);
  console.log("registerRouter");

  const newUser = {
    username: req.body.email,
    hash: saltHash.hash,
    salt: saltHash.salt,
  };

  knex("users")
    .insert(newUser, "*")
    .then((data) => {
      console.log(data[0]);
      // done(null, data[0]);
    });
});

module.exports = router;
