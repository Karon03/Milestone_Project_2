'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Sleep extends Model {
    }
}

Sleep.init({
    sleep_id: {
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
        type: DataTypes.DATE,
        allowNull: false
    },
    email: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Sleep',
    tableName: 'sleep',
    timestamps: false
})
return Sleep