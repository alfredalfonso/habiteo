'use strict';

const { DataTypes } = require('sequelize');
const instance = require('../src/dbconnection');

const habit = instance.sequelize.define(
  'habits',
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    unit: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    value: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    recurrence: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    tableName: 'habits',
  }
);

module.exports = habit;
