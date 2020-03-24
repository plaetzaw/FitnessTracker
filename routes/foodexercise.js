const express = require("express");
const router = express.Router();
let db = require('../models')

router.get("/foodexercise", (req, res) => {
  db.exercies.findAll()
  .then(results => {
    let exercises = results;
    let userID = req.session.userid
    res.render("foodexercise", 
    {
      exercises,
      userID
    });
  })
});

router.post('/foodexercise', (req, res)=>{
  if(req.body.submit == 'food'){
    let calories = req.body.calories;
    db.calorieIntake.create({calories: calories, userID:req.session.userid})
    .then(()=>{
      res.redirect('/tracker')
    })
  }
  else{
    let exerciseID = Number(req.body.exercise);
    let duration = Number(req.body.duration);
    db.exercies.findOne({where: {id: 1}})
    .then(exercise => {
      switch(req.session.weight)
      {
        case 90:
          calPerMinute = exercise.calorieBurn / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 100:
          calPerMinute = exercise.calBurn100 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 110:
          calPerMinute = exercise.calBurn110 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 120:
          calPerMinute = exercise.calBurn120 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 130:
          calPerMinute = exercise.calBurn130 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 140:
          calPerMinute = exercise.calBurn140 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 150:
          calPerMinute = exercise.calBurn150 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 160:
          calPerMinute = exercise.calBurn160 / 30;
          calorieBurn = calPerMinute * duration;

          break;
        case 170:
          calPerMinute = exercise.calBurn170 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 180:
          calPerMinute = exercise.calBurn180 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 190:
          calPerMinute = exercise.calBurn190 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 200:
          calPerMinute = exercise.calBurn200 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 220:
          calPerMinute = exercise.calBurn220 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 240:
          calPerMinute = exercise.calBurn240 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 260:
          calPerMinute = exercise.calBurn260 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 280:
          calPerMinute = exercise.calBurn280 / 30;
          calorieBurn = calPerMinute * duration;
          break;
        case 300:
          calPerMinute = exercise.calBurn300 / 30;
          calorieBurn = calPerMinute * duration;
          break;
      }
      console.log(exercise.calBurn160);
    })
    .then(()=>{
    db.userExercise.create({exerciseID: exerciseID, caloriesBurned: parseInt(calorieBurn), userID: req.session.userid})
    .then(()=>{
      res.redirect('/tracker')
    })
  })
}
})


module.exports = router;
