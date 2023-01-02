const router = require("express").Router();
const passport = require("passport");
const genPassword = require("../../utils/passUtils").genPassword;
const knex = require("../../config/database");
const isAuth = require("../../utils/authMiddleware").isAuth;
const isAdmin = require("../../utils/authMiddleware").isAdmin;

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
      res.json({ msg: "User Created" });
    })
    .catch((err) => {
      res.json({ msg: err });
    });
});

module.exports = router;
