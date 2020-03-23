"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("users", "bmr", {
        allowNull: false,
        type: Sequelize.FLOAT
      }),
      queryInterface.changeColumn("users", "weight", {
        allowNull: false,
        type: Sequelize.FLOAT
      }),
      queryInterface.changeColumn("users", "height", {
        allowNull: false,
        type: Sequelize.FLOAT
      }),
      queryInterface.changeColumn("users", "age", {
        allowNull: false,
        type: Sequelize.INTEGER
      }),
      queryInterface.changeColumn("users", "gender", {
        allowNull: false,
        type: Sequelize.STRING
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
