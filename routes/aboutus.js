const express = require("express");
const router = express.Router();

router.get("/aboutus", (req, res) => {
  let userID = req.session.userid
  res.render("aboutus.ejs", 
  {
    userID
  });
});

module.exports = router;
