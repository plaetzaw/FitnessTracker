'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.changeColumn(
        'users',
        'bmr',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: 0
        }
      )
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
