'use strict';

const { DataTypes } = require('sequelize');
const instance = require('../src/dbconnection');

const session = instance.sequelize.define(
  'users',
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    valid: {
      allowNull: false,
      defaultValue: true,
      type: DataTypes.BOOLEAN,
    },
    userAgent: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    tableName: 'sessions',
  }
);

module.exports = session;
