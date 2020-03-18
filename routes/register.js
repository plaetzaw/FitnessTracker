const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
let db = require('../models')

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/register', (req, res) => {
    res.render('register.ejs');
});

router.post('/register', (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    db.users.create({ email: email, password: password })
        .then(user => {
            console.log(user)
            res.send('received post')
        })
        .catch(error => {
            console.log(error)
        })
})

module.exports = router;