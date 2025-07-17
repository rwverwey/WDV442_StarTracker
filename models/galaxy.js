'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Galaxy extends Model {
    static associate(models) {
      Galaxy.hasMany(models.Star, {
        foreignKey: 'galaxyId',
        as: 'stars',
        onDelete: 'CASCADE'
      });
    }
  }
  Galaxy.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    distance: DataTypes.FLOAT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Galaxy',
    tableName: 'Galaxies',  });
  return Galaxy;
};
