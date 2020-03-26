const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

let auth = (req, res, next) => {
    if (req.session.userid) {
        next();
    }
    else {
        res.redirect('/login')
    }
}
router.get('/chat', auth, (req, res) => {
    res.render('chat', {
        userID: req.session.userid
    })
})

module.exports = router