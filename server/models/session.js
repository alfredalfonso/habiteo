'use strict';

const { DataTypes } = require('sequelize');
const instance = require('../src/dbconnection');

const session = instance.sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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

exports.model = session;
