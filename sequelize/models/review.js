('use strict');
const { Model } = require('sequelize');

/**
 * @param {import("sequelize").Sequelize} sequelize - Sequelize
 * @param {import("sequelize").DataTypes} DataTypes - Sequelize Column DataTypes
 * @return {Model} - Sequelize Model
 * **/
module.exports = (sequelize, DataTypes) => {
    class Reviews extends Model {
        static associate(models) {
            models.Reviews.belongsTo(models.Users, {
                foreignKey: { name: 'customerId', allowNull: false },
                targetKey: 'id',
                allowNull: false,
            });
            models.Reviews.belongsTo(models.Users, {
                foreignKey: { name: 'businessId', allowNull: false },
                targetKey: 'id',
                allowNull: false,
            });
            models.Reviews.belongsTo(models.Services, {
                foreignKey: { name: 'serviceId', allowNull: false },
                targetKey: 'id',
            });
        }
    }

    Reviews.init(
        {
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            star: {
                type: DataTypes.INTEGER,
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
            modelName: 'Reviews',
        }
    );
    return Reviews;
};
