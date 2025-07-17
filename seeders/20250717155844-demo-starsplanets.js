'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('StarsPlanets', [
      {
        starId: 1,
        planetId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        starId: 1,
        planetId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        starId: 2,
        planetId: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StarsPlanets', null, {});
  }
};
