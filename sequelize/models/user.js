('use strict');
const { Model } = require('sequelize');

/**
 * @param {import("sequelize").Sequelize} sequelize - Sequelize
 * @param {import("sequelize").DataTypes} DataTypes - Sequelize Column DataTypes
 * @return {Model} - Sequelize Model
 * **/
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        static associate(models) {
            models.Users.hasMany(models.Services, {
                foreignKey: 'userId',
                sourceKey: 'id',
            });
            models.Users.hasMany(models.Reviews, {
                foreignKey: 'userId',
                sourceKey: 'id',
            });
        }
    }

    Users.init(
        {
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nickname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            point: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 500,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            isBusiness: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            sequelize,
            modelName: 'Users',
        }
    );
    return Users;
};
