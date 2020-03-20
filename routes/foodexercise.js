const express = require("express");
const router = express.Router();
let db = require('../models')

router.get("/foodexercise", (req, res) => {
  db.exercies.findAll()
  .then(results => {
    let exercises = results;
    res.render("foodexercise", 
    {
      exercises
    });
  })
});

router.post('/foodexercise', (req, res)=>{
  if(req.body.submit == 'food'){
    let calories = req.body.calories;
    db.calorieIntake.create({calories: calories})
    .then(()=>{
      res.redirect('/tracker')
    })
  }
  else{
    let exercise = req.body.exercise;
    let duration = req.body.duration;
    console.log(req.session.email);
  }
})

module.exports = router;
