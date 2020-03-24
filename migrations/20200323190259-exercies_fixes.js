'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.changeColumn(
        'exercies', 
        'calBurn100',
        { type: Sequelize.INTEGER}
        )
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn110',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn120',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn130',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn140',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn150',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn160',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn170',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn180',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn190',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn200',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn220',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn240',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn260',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn280',
            { type: Sequelize.INTEGER}
          );
        })
        .then(()=>{
          return queryInterface.changeColumn(
            'exercies', 
            'calBurn300',
            { type: Sequelize.INTEGER}
          );
        })
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
