'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Sleep extends Model {
    }


Sleep.init({
    sleep_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    days: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start_sleep: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stop_sleep: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start_interruption: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stop_interruption: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Sleep',
    tableName: 'sleep',
    timestamps: false
})
return Sleep
}