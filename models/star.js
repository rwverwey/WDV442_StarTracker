'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
    static associate(models) {
      Star.belongsTo(models.Galaxy, {
        foreignKey: 'galaxyId',
        as: 'galaxy',
        onDelete: 'CASCADE',
      });

      Star.belongsToMany(models.Planet, {
        through: 'StarsPlanets',
        foreignKey: 'starId',
        otherKey: 'planetId',
        as: 'planets',
      });
    }
  }

  Star.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    size: DataTypes.STRING,
    description: DataTypes.TEXT,
    luminosity: DataTypes.FLOAT,
    galaxyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Star',
    tableName: 'Stars',
  });

  return Star;
};
