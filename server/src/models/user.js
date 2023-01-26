'use strict';

const { DataTypes, Sequelize } = require('sequelize');
const instance = require('../dbconnection');

const user = instance.sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    tableName: 'users',
  }
);

exports.model = user;
