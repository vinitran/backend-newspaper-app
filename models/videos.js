const { DataTypes } = require('sequelize');
const sequelize = require('../databases/database');

const videos = sequelize.define('videos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    videoUrl: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    thumbnail: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    time: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
});

module.exports = videos;