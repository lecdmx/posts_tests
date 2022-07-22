const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
    process.env.DBNAME,
    process.env.DBUSERNAME,
    process.env.DBPASSWORD,
    {
        host: process.env.DBHOST,
        dialect: 'postgres',
        port: process.env.DBPORT
    }
)

exports.db = db;
