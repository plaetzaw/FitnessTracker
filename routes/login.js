const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login.ejs');
});
router.post('/login', (req, res) => {

})

module.exports = router;