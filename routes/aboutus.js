const express = require("express");
const router = express.Router();

router.get("/aboutus", (req, res) => {
  res.render("aboutus.ejs");
});

module.exports = router;
