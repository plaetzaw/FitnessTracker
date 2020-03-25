const express = require("express");
const router = express.Router();
let db = require("../models");

router.get("/tracker", (req, res) => {
  //res.status(200).json({ message: "HELLO TRACKER PAGE!!" });
  let bmr = req.session.bmr;
  let weight = req.session.weight;
  let userExerciseData = [];
  let userCaloriesData = [];
  console.log("Looking for exercises");
  db.userExercise
    .findAll({
      where: {
        userid: 62
      }
    })
    .then(exercises => {
      console.log(exercises);
      res.status(200).json({ message: "FOUND THE EXERCISES!" });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: "YOU FAILED" });
    });
  //   .then(exercises => {
  //     console.log("===FOUND EXERCISES===");
  //     exercises.forEach(exercise => {
  //       req.session.caloriesBurned += exercise;
  //       userExerciseData.push(exercise);
  //     });
  //   })
  //   .then(() => {
  //     console.log("===LOOKING FOR CALORIES===");
  //     db.calorieIntakes
  //       .findAll({
  //         where: {
  //           userid: "62"
  //         }
  //       })
  //       .then(foods => {
  //         console.log("===FOUND CALORIES===");
  //         foods.forEach(calories => {
  //           req.session.calories += calories;
  //           userCaloriesData.push(calories);

  //           let DailyWeightLoss = bmr + userExerciseData - userCaloriesData;

  //           let WeeklyChange = DailyWeightLoss * 7;

  //           let WeeklyWeightLoss = WeeklyChange / 3500;

  //           let ProjectedWeeklyWeight = weight - WeeklyWeightLoss;

  //           let MonthlyWeightLoss = (WeeklyChange * 4) / 3500;

  //           let ProjectedMonthlyWeight = weight - MonthlyWeightLoss;

  //           let TwoMonthLoss = weight - 2 * MonthlyWeightLoss;

  //           let ThreeMonthLoss = weight - 3 * MonthlyWeightLoss;

  //           let FourMonthLoss = weight - 4 * MonthlyWeightLoss;
  //           console.log("THESE ARE THE VARIABLES");
  //           console.log(DailyWeightLoss);
  //           console.log(WeeklyChange);
  //           console.log(WeeklyWeightLoss);
  //           console.log(MonthlyWeightLoss);
  //           console.log(ProjectedWeeklyWeight);
  //           console.log(ProjectedMonthlyWeight);
  //           console.log(TwoMonthLoss);
  //           console.log(ThreeMonthLoss);
  //           console.log(FourMonthLoss);

  //           window.onload = function() {
  //             var month = new Array();
  //             month[0] = "January";
  //             month[1] = "February";
  //             month[2] = "March";
  //             month[3] = "April";
  //             month[4] = "May";
  //             month[5] = "June";
  //             month[6] = "July";
  //             month[7] = "August";
  //             month[8] = "September";
  //             month[9] = "October";
  //             month[10] = "November";
  //             month[11] = "December";
  //             var d = new Date();
  //             const n = month[d.getMonth()];
  //             const o = month[d.getMonth() + 1];
  //             const p = month[d.getMonth() + 2];
  //             const q = month[d.getMonth() + 3];

  //             const CHART = document.getElementById("lineChart");
  //             console.log(CHART);
  //             let lineChart = new Chart(CHART, {
  //               type: "line",
  //               data: {
  //                 labels: [n, o, p, q],
  //                 datasets: [
  //                   {
  //                     label: "2020",
  //                     data: [
  //                       ProjectedMonthlyWeight,
  //                       TwoMonthLoss,
  //                       ThreeMonthLoss,
  //                       FourMonthLoss
  //                     ]
  //                   }
  //                 ]
  //               }
  //             });
  //           };
  //         });
  //       })
  //       .then(() => {
  //         console.log("===DONE===");
  //         res.render("tracker.ejs");
  //       })
  //       .catch(err => {
  //         console.error(err);
  //         res.status(500).json({ error: err });
  //       });
  //   });
});

module.exports = router;
