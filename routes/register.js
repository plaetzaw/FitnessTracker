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
  let bmr = 0;
  let weight = req.body.weight;
  let age = req.body.age;
  let height = req.body.height;
  let gender = req.body.gender;
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

          newUser
            .save()
            .then(() => res.redirect("/"))
            .catch(err => console.error(err));
        });
      }
    });
});

module.exports = router;
