const router = require("express").Router();

router.route("/").post((req, res) => {
  console.log(req.body);
  const message = req.body;
  res.json({ data: message });
  console.log(req.session);
});

module.exports = router;
