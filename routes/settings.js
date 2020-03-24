const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
let db = require('../models');

router.use(bodyParser.urlencoded({ extended: false }));


router.get("/settings", (req, res) => {
  console.log('updating info')
  let userID = req.session.userid
  res.render("settings.ejs",
  {
    userID
  });
});
router.post('/settings', (req, res) => {
  let gender = req.body.gender;
  let height = req.body.height;
  let weight = req.body.weight;
  let age = req.body.age;
  let userid = 56;
  if (gender == "Male") {
    bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
  }
  if (gender == "Female") {
    bmr = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
  }

  db.users.findOne({
    where: {
      id: userid
    }
  }).then(persistedUser => {
    if (persistedUser) {
      let updateUser = db.user.update({
        gender: gender,
        height: height,
        weight: weight,
        age: age
      })
      console.log(weight);
      console.log(gender);
      console.log(age);
      console.log(height);
      console.log(bmr);
      console.log(id)
      console.log(userid)
      updateUser
        .save()
        .then(() => res.redirect("/tracker"))
        .catch(err => console.error(err));
    }
  })


})


module.exports = router;
