'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StarsPlanets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      starId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Stars',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      planetId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Planets',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Add unique constraint for starId + planetId
    await queryInterface.addConstraint('StarsPlanets', {
      fields: ['starId', 'planetId'],
      type: 'unique',
      name: 'unique_star_planet_pair'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StarsPlanets');
  }
};
