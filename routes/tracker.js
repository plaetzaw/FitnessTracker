const express = require("express");
const router = express.Router();

router.get("/tracker", (req, res) => {
  res.render("tracker.ejs");
});

module.exports = router;
