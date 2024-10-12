'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Entry extends Model {
        static associate(models) {
            // define associations here if needed
        }
    }

    Entry.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        entryDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Entry',
    });

    return Entry;
};
