'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StarsPlanets extends Model {
    static associate(models) {
      // This join table does not need explicit associations
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
  tableName: 'StarsPlanets',
  timestamps: true   
});


  return StarsPlanets;
};
