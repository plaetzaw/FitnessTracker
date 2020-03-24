const express = require('express');
const router = express.Router();

router.get('/profile', (req, res)=>{
    let userID = req.session.userid
    res.render('profile', {
        userID
    })
})

module.exports = router