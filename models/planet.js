'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Planet extends Model {
    static associate(models) {
      // A planet belongs to many stars through the StarsPlanets join table
      Planet.belongsToMany(models.Star, {
        through: 'StarsPlanets',
        foreignKey: 'planetId',
        otherKey: 'starId',
        as: 'stars',
      });
    }
  }

  Planet.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Planet',
  });

  return Planet;
};
