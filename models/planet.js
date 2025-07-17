'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Planet extends Model {
    static associate(models) {
      Planet.belongsToMany(models.Star, {
        through: 'StarsPlanets',
        foreignKey: 'planetId',
        otherKey: 'starId',
        as: 'stars',
      });
    }
  }

  Planet.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    orbitalPeriod: DataTypes.FLOAT,
    size: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Planet',
    tableName: 'Planets',
  });

  return Planet;
};
