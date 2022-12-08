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
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

const newsDetail = sequelize.define('newsDetail', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,

    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descriptionId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    like: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

const description = sequelize.define('descriptionNews', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    descriptionId: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.TEXT("long"),
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
})

news.hasOne(newsDetail, {
    foreignKey: "id"
})

module.exports = {
    news,
    newsDetail,
    description
}