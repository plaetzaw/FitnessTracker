const express = require('express')
const router = express.Router();

router.get('/chat', (req, res) => {
    res.render('chat', {
        userID: req.session.userid
    })
})

module.exports = router