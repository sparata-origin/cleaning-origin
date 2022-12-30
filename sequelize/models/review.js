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
            models.Reviews.belongsTo(models.Customers, {
                foreignKey: 'customerId',
                targetKey: 'id',
            });
            models.Reviews.belongsTo(models.Business, {
                foreignKey: 'businessId',
                targetKey: 'id',
            });
            models.Reviews.belongsTo(models.Services, {});
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
