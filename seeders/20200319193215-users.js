"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("users", "height", {
        type: Sequelize.INTEGER
      })
      .then(() => {
        return queryInterface.addColumn("users", "age", {
          type: Sequelize.INTEGER
        });
      })
      .then(() => {
        return queryInterface.addColumn("users", "gender", {
          type: Sequelize.INTEGER
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
