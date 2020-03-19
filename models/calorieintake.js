'use strict';
module.exports = (sequelize, DataTypes) => {
  const calorieIntake = sequelize.define('calorieIntake', {
    calories: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  }, {});
  calorieIntake.associate = function(models) {
    // associations can be defined here
    models.calorieIntake.belongsTo(models.users);

  };
  return calorieIntake;
};