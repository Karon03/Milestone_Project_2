'use strict'
const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Signup extends Model {
  }}

Signup.init({
    signup_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Signup',
    tableName: 'signup',
    timestamps: false
  })
  return Signup
