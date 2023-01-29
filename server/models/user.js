'use strict';

const bcrypt = require('bcrypt');

const { DataTypes } = require('sequelize');
const instance = require('../src/dbconnection');

const user = instance.sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      get() {
        return this.getDataValue('password');
      },
      set(value) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(value, salt);
        this.setDataValue('password', hash);
      },
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    tableName: 'users',
  }
);

user.prototype.comparePassword = async (candidatePassword, userPassword) => {
  return bcrypt.compare(candidatePassword, userPassword).catch(() => false);
};

exports.model = user;
