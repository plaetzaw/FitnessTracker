"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      bmr: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      gender: DataTypes.STRING
    },
    {}
  );
  users.associate = function(models) {
    // associations can be defined here
    models.users.hasMany(models.userExercise);
    models.users.hasMany(models.calorieIntake);
  };
  return users;
};
