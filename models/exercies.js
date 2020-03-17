'use strict';
module.exports = (sequelize, DataTypes) => {
  const exercies = sequelize.define('exercies', {
    name: DataTypes.STRING,
    calorieBurn: DataTypes.INTEGER
  }, {});
  exercies.associate = function(models) {
    // associations can be defined here
    models.exercies.hasMany(models.userExercise)
  };
  return exercies;
};