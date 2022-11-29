const router = require("express").Router();

router.route("/").post((req, res) => {
  console.log(req.body);
  const message = req.body;
  res.json({ data: message });
});

module.exports = router;
