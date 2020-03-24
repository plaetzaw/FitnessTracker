'use strict';
module.exports = (sequelize, DataTypes) => {
  const exercies = sequelize.define('exercies', {
    name: DataTypes.STRING,
    calorieBurn: DataTypes.INTEGER,
    calBurn100: DataTypes.INTEGER,
    calBurn110: DataTypes.INTEGER,
    calBurn120: DataTypes.INTEGER,
    calBurn130: DataTypes.INTEGER,
    calBurn140: DataTypes.INTEGER,
    calBurn150: DataTypes.INTEGER,
    calBurn160: DataTypes.INTEGER,
    calBurn170: DataTypes.INTEGER,
    calBurn180: DataTypes.INTEGER,
    calBurn190: DataTypes.INTEGER,
    calBurn200: DataTypes.INTEGER,
    calBurn220: DataTypes.INTEGER,
    calBurn240: DataTypes.INTEGER,
    calBurn260: DataTypes.INTEGER,
    calBurn280: DataTypes.INTEGER,
    calBurn300: DataTypes.INTEGER,
  }, {});
  exercies.associate = function(models) {
    // associations can be defined here
    models.exercies.hasMany(models.userExercise)
  };
  return exercies;
};