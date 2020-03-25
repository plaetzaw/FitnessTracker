const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
let db = require('../models');

router.use(bodyParser.urlencoded({ extended: false }));

let auth = (req, res, next) => {
  if (req.session.userid) {
    next();
  }
  else {
    res.redirect('/login')
  }
}
// format to add auth fun to routes
// app.get('/protected', auth, (req, res) => {
//   res.send('protected')
// })

router.get("/settings", auth, (req, res) => {
  console.log('updating info')
  let userID = req.session.userid
  res.render("settings.ejs",
    {
      userID
    });
});

router.post('/settings', auth, (req, res) => {
  console.log("SENDING POST FROM SETTINGS")
  console.log(req.body)
  let gender = req.body.gender;
  let height = req.body.height;
  let weight = req.body.weight;
  let age = req.body.age;
  let userID = req.session.userid
  // let userid: req.session.id;
  if (gender == "Male") {
    bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
  }
  if (gender == "Female") {
    bmr = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
  }

  console.log("Starting the Find One for Update")
  db.users.update({
    gender: gender,
    height: height,
    weight: weight,
    age: age
  }, {
    where: {
      id: userID
    }
  })
    .then(() => {
      console.log("Updated the user info")
      res.redirect("/tracker")
      // res.status(200).json({ message: "It did the thing!" })
    })
    .catch(err => console.error(err));

})



module.exports = router;
