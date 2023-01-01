('use strict');
const { Model } = require('sequelize');

/**
 * @param {import("sequelize").Sequelize} sequelize - Sequelize
 * @param {import("sequelize").DataTypes} DataTypes - Sequelize Column DataTypes
 * @return {Model} - Sequelize Model
 * **/
module.exports = (sequelize, DataTypes) => {
    class Services extends Model {
        static associate(models) {
            models.Services.belongsTo(models.Users, {
                foreignKey: 'userId',
                targetKey: 'id',
            });
            models.Services.hasOne(models.Reviews, {});
        }
    }

    Services.init(
        {
            address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            homeImage: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: '대기중',
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
            modelName: 'Services',
        }
    );
    return Services;
};
