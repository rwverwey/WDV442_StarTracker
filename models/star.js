'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
    static associate(models) {
      // Each star belongs to one galaxy
      Star.belongsTo(models.Galaxy, {
        foreignKey: 'galaxyId',
        as: 'galaxy',
        onDelete: 'CASCADE',
      });

      // Each star belongs to many planets through StarsPlanets
      Star.belongsToMany(models.Planet, {
        through: 'StarsPlanets',
        foreignKey: 'starId',
        otherKey: 'planetId',
        as: 'planets'
      });
    }
  }

  Star.init({
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    galaxyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Star',
  });

  return Star;
};
