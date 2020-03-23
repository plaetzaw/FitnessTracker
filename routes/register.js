const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
let db = require("../models");
let bcrypt = require("bcrypt");
let SALT_ROUNDS = 10;

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/register", (req, res) => {
  res.render("register.ejs");
});

router.post("/register", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let weight = Number(req.body.weight);
  let age = Number(req.body.age);
  let height = Number(req.body.height);
  let gender = req.body.gender;
  if (gender == "Male") {
    bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
  }
  if (gender == "Female") {
    bmr = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
  }


  db.users
    .findOne({
      where: {
        email: email
      }
    })
    .then(persistedUser => {
      if (persistedUser) {
        res.status(500).json({ message: "Email is already in use" });
      } else {
        console.log("Hashing password...");
        bcrypt.hash(password, SALT_ROUNDS).then(hash => {
          let newUser = db.users.build({
            email: email,
            password: hash,
            bmr: bmr,
            weight: weight,
            age: age,
            height: height,
            gender: gender
          });
          console.log(email);
          console.log(weight);
          console.log(height);
          console.log(bmr);
          newUser
            .save()
            .then(() => res.redirect("/login"))
            .catch(err => console.error(err));
        });
      }
    });
});

module.exports = router;
