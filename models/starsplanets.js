'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StarsPlanets extends Model {
    static associate(models) {
    }
  }

  StarsPlanets.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      starId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Stars',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      planetId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Planets',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'StarsPlanets',
      tableName: 'StarsPlanets',
      timestamps: true
    }
  );

  return StarsPlanets;
};
