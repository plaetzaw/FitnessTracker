'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('exercies', 'calBurn100', {
              type: Sequelize.INTEGER
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn110', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn120', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn130', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn140', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn150', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn160', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn170', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn180', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn190', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn200', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn220', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn240', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn260', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn280', {
              type: Sequelize.INTEGER
            })
          })
          .then(()=>{
            return queryInterface.addColumn('exercies', 'calBurn300', {
              type: Sequelize.INTEGER
            })
          })
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
