'use strict';

const { DataTypes } = require('sequelize');
const instance = require('../src/dbconnection');

const habit_log = instance.sequelize.define(
  'habit_logs',
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    habitId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    value: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    tableName: 'habit_logs',
  }
);

module.exports = habit_log;
