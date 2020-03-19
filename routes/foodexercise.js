const express = require("express");
const router = express.Router();

router.get("/foodexercise", (req, res) => {
  res.render("foodexercise.ejs");
});

module.exports = router;
