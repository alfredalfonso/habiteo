'use strict';

const { DataTypes, Sequelize } = require('sequelize');
const instance = require('../dbconnection');

const session = instance.sequelize.define(
  'users',
  {
    id: {
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
      unique: true,
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
