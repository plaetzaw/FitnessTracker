const express = require("express");
const router = express.Router();
let db = require("../models");

router.get("/tracker", (req, res) => {
  let bmr = req.session.bmr;
  let weight = req.session.weight;
  let exercise = "";
  let calories = "";
  db.userExercise
    .findAll({
      where: {
        userid: req.session.userid
      }
    })
    .then(exercises => {
      exercises.forEach(exercise => {
        req.session.caloriesBurned += exercise;
      });
    })
    .then(() => {
      db.calorieIntakes.findAll({
        where: {
          userid: req.session.userid
        }
      });
    })
    .then(foods => {
      foods.forEach(calories => {
        req.session.calories += calories;
      });
    });

  let DailyWeightLoss = bmr + exercise - calories;

  let WeeklyChange = DailyWeightLoss * 7;

  let WeeklyWeightLoss = WeeklyChange / 3500;

  let ProjectedWeeklyWeight = weight - WeeklyWeightLoss;

  let MonthlyWeightLoss = (WeeklyChange * 4) / 3500;

  let ProjectedMonthlyWeight = weight - MonthlyWeightLoss;

  console.log(DailyWeightLoss);
  console.log(WeeklyChange);
  console.log(WeeklyWeightLoss);
  console.log(MonthlyWeightLoss);
  console.log(ProjectedWeeklyWeight);
  console.log(ProjectedMonthlyWeight);

  res.render("tracker.ejs");
});

module.exports = router;
