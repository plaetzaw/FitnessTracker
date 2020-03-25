"use strict";
module.exports = (sequelize, DataTypes) => {
  const userExercise = sequelize.define(
    "userExercise",
    {
      exerciseID: DataTypes.INTEGER,
      caloriesBurned: DataTypes.INTEGER,
      userID: DataTypes.INTEGER
    },
    {}
  );
  userExercise.associate = function(models) {
    // associations can be defined here
    models.userExercise.belongsTo(models.exercies);
    models.userExercise.belongsTo(models.users);
  };
  return userExercise;
};
