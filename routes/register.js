const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register.ejs');
});

router.post('/register', (req, res) => {
    res.send('received post')
})

module.exports = router;