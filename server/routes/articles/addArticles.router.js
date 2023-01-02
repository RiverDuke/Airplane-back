const router = require("express").Router();
const passport = require("passport");
const genPassword = require("../../utils/passUtils").genPassword;
const knex = require("../../config/database");
const isAuth = require("../../utils/authMiddleware").isAuth;
const isAdmin = require("../../utils/authMiddleware").isAdmin;

router.route("/addArticle").post((req, res, next) => {
  console.log(req.body);
});

module.exports = router;
