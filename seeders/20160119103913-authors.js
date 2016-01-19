'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    /*
     Add altering commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.bulkInsert('Person', [{
     name: 'John Doe',
     isBetaMember: false
     }], {});
     */

    return queryInterface.bulkInsert('Authors', [
      {
        firstName: 'Cory',
        lastName: 'House',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: 'Scott',
        lastName: 'Allen',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: 'Dan',
        lastName: 'Wahlin',
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
     Add reverting commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.bulkDelete('Person', null, {});
     */

    return queryInterface.bulkDelete('Author', null, {});
  }
};
