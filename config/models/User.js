const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../db');

module.exports = () => db.define('User', {
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    tableName: 'user',
    freezeTableName: true
});

// exports.User = User;
