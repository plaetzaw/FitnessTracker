const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
let db = require('../models');
let bcrypt = require('bcrypt');
let SALT_ROUNDS = 10;

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
                            if (req.session) {
                                req.session.email = email;
                                req.session.name = persistUser.name;
                            }
                            console.log('user logged in')
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
    res.render('login.ejs');
});

module.exports = router;