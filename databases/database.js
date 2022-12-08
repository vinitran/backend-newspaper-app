const { Sequelize } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER_NAME,
    null,
    {
        host: process.env.HOST,
        dialect: "mysql",
        port: process.env.DB_PORT,
    }
);

module.exports = sequelize;