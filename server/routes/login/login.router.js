const router = require("express").Router();
const passport = require("passport");
const genPassword = require("../../utils/passUtils").genPassword;
const knex = require("../../config/database");
const isAuth = require("../../utils/authMiddleware").isAuth;
const isAdmin = require("../../utils/authMiddleware").isAdmin;

router.route("/").post(passport.authenticate("local"), (req, res, next) => {
  // req.logout((err) => {
  //   if (err) {
  //     return next(err);
  //   }
  // });
  // console.log("youve been logged out");
  console.log(req.user);
  res.json({ data: req.user });
});

router.route("/test").get(isAuth, (req, res, next) => {
  res.json({ authorized: true });
});

router.route("/logout").get((req, res, next) => {
  console.log(req.session);
  req.logout((err) => {
    if (err) return next(err);
    console.log("Youve been logged out");
  });
  res.json({ msg: "user logged out" });
});
module.exports = router;
