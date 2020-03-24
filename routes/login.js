const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
let db = require('../models');
let bcrypt = require('bcrypt');
let SALT_ROUNDS = 10;
const session = require('express-session')

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/login", (req, res) => {
    console.log("logging in user... ")
    let email = req.body.email,
        password = req.body.password;

    db.users.findOne({
        where: {
            email: email
        }
    })
        .then(persistUser => {
            if (persistUser) {
                bcrypt.compare(password, persistUser.password)
                    .then(success => {
                        if (success) {
                            req.session.email = email;
                            let userID = persistUser.id
                            req.session.userid = userID;
                            req.session.bmr = persistUser.bmr;
                            req.session.weight = persistUser.weight;
                            console.log('user logged in')
                            console.log(req.session.email);
                            console.log(req.session.userid);
                            res.redirect("/");
                        } else {
                            res.render("login", { message: "invalid information" });
                        }
                    })
            } else {
                let invalidLogin = "Invalid login attempt";
                res.status(500).json({ message: invalidLogin });
            }
        })
})

router.get('/login', (req, res) => {
    let userID = req.session.userID
    res.render('login.ejs', {
        userID
    });
});

module.exports = router;