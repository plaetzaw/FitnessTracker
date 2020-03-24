const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let userID = req.session.userid
  res.render('index.ejs',
  {
    userID
  });
});

module.exports = router;
