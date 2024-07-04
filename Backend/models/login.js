'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Login extends Model {
    }
}

Login.init({
    login_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.DATE,
        allowNull: false
    },
    email: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Login',
    tableName: 'login',
    timestamps: false
})
return Login