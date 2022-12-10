const { DataTypes } = require('sequelize');
const sequelize = require('../databases/database');

const videos = sequelize.define('videos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    channelName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    uri: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    caption: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    musicName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    like: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comments: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    avatarUri: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = videos;