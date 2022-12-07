const router = require("express").Router();
const passport = require("passport");
const genPassword = require("../../utils/passUtils").genPassword;
const knex = require("../../config/database");
const isAuth = require("../authMiddleware").isAuth;
const isAdmin = require("../authMiddleware").isAdmin;

router.route("/").post(passport.authenticate("local"), (req, res, next) => {
  console.log(req.body);
  console.log("HMM It worked your logged in");
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  console.log("youve been logged out");
  res.json({ data: "youve been logged out" });
});

module.exports = router;
