'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      // Clean slate
      await queryInterface.bulkDelete('Planets', null, { truncate: true, restartIdentity: true, cascade: true });
      await queryInterface.bulkDelete('Stars', null, { truncate: true, restartIdentity: true, cascade: true });
      await queryInterface.bulkDelete('Galaxies', null, { truncate: true, restartIdentity: true, cascade: true });

      console.log('Seeding Galaxy...');
      await queryInterface.bulkInsert('Galaxies', [{
        name: 'Milky Way',
        type: 'Spiral',
        distance: 0.0,
        image: 'milky_way.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);

      console.log('Seeding Star...');
      await queryInterface.bulkInsert('Stars', [{
        name: 'Sun',
        type: 'G-Type Main-Sequence',
        luminosity: 1.0,
        galaxyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);

      console.log('Seeding Planet...');
      await queryInterface.bulkInsert('Planets', [{
        name: 'Earth',
        type: 'Terrestrial',
        orbitalPeriod: 365.25,
        starId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);

    } catch (error) {
      console.error('SEED ERROR:', error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Planets', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('Stars', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('Galaxies', null, { truncate: true, restartIdentity: true, cascade: true });
  }
};
