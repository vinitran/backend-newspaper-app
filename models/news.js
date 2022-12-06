const { DataTypes } = require('sequelize');
const sequelize = require('../databases/database');

const news = sequelize.define('news', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    imageUrl: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    time: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
});

const newsDetail = sequelize.define('newsDetail', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    imageUrl: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    time: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    like: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

news.hasOne(newsDetail, {
    foreignKey: "id"
})

module.exports = {
    news,
    newsDetail
}