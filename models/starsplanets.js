'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StarsPlanets extends Model {
    static associate(models) {
      // No associations needed for join table
    }
  }
  StarsPlanets.init({
    starId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    planetId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'StarsPlanets',
    tableName: 'StarsPlanets'
  });
  return StarsPlanets;
};
