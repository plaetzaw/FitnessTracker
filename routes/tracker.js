const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
let db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));


let auth = (req, res, next) => {
  if (req.session.userid) {
    next();
  }
  else {
    res.redirect('/login')
  }
}


router.get("/tracker", auth, (req, res) => {
  let bmr = req.session.bmr;
  let weight = req.session.weight;
  let userExerciseData = [];
  let userCaloriesData = [];
  db.userExercise
    .findAll({
      attributes: [
        "id",
        "exerciseID",
        "caloriesBurned",
        "userID",
        "createdAt",
        "updatedAt"
      ],
      where: {
        userID: req.session.userid
      }
    })
    .then(exercises => {
      console.log("===FOUND EXERCISES===");
      exercises.forEach(exercise => {
        req.session.caloriesBurned += exercise;
        userExerciseData.push(exercise);
      });
    })
    .then(() => {
      console.log("===LOOKING FOR CALORIES===");
      db.calorieIntake
        .findAll({
          attributes: ["id", "calories", "userID", "createdAt", "updatedAt"],
          where: {
            userID: req.session.userid
          }
        })
        .then(foods => {
          console.log("===FOUND CALORIES===");
          foods.forEach(calories => {
            req.session.calories += calories;
            userCaloriesData.push(calories);

            let DailyWeightLoss =
              bmr + userExerciseData[0].caloriesBurned - calories.calories;

            let WeeklyChange = DailyWeightLoss * 7;

            let WeeklyWeightLoss = WeeklyChange / 3500;

            let ProjectedWeeklyWeight = weight - WeeklyWeightLoss;

            let MonthlyWeightLoss = (WeeklyChange * 4) / 3500;

            let ProjectedMonthlyWeight = weight - MonthlyWeightLoss;

            let TwoMonthLoss = weight - 2 * MonthlyWeightLoss;

            let ThreeMonthLoss = weight - 3 * MonthlyWeightLoss;

            let FourMonthLoss = weight - 4 * MonthlyWeightLoss;

            console.log("THESE ARE THE VARIABLES");
            console.log(weight);
            console.log(bmr);
            console.log(calories.calories);
            console.log(userExerciseData[0].caloriesBurned);
            console.log(DailyWeightLoss);
            console.log(WeeklyChange);
            console.log(WeeklyWeightLoss);
            console.log(MonthlyWeightLoss);
            console.log(ProjectedWeeklyWeight);
            console.log(ProjectedMonthlyWeight);
            console.log(TwoMonthLoss);
            console.log(ThreeMonthLoss);
            console.log(FourMonthLoss);
            req.session.ProjectedMonthlyWeight = ProjectedMonthlyWeight;
            req.session.TwoMonthLoss = TwoMonthLoss;
            req.session.ThreeMonthLoss = ThreeMonthLoss;
            req.session.FourMonthLoss = FourMonthLoss;
          });
        })
        .then(() => {
          console.log("===DONE===");
          res.render("tracker.ejs", {
            userID: req.session.userid,
            calories: req.session.calories,
            exercise: req.session.exercise,
            ProjectedMonthlyWeight: req.session.ProjectedMonthlyWeight,
            TwoMonthLoss: req.session.TwoMonthLoss,
            ThreeMonthLoss: req.session.ThreeMonthLoss,
            FourMonthLoss: req.session.FourMonthLoss,
            bmr: req.session.bmr,
            weight: req.session.weight
          });
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: err });
        });
    });
});

module.exports = router;
