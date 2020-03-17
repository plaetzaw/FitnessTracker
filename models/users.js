'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    models.users.hasMany(models.userExercise)
    models.users.hasMany(models.calorieIntake)
  };
  return users;
};