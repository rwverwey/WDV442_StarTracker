'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StarsPlanets extends Model {
    static associate(models) {
      // This join table does not need explicit associations
    }
  }

  StarsPlanets.init({
    starId: DataTypes.INTEGER,
    planetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StarsPlanets',
    tableName: 'StarsPlanets',
    timestamps: false
  });

  return StarsPlanets;
};
