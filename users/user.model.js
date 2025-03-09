const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        email: { type: DataTypes.STRING, allowNull: false },
        passwordHash: { type: DataTypes.STRING, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        defaultScope: {
            // Exclude password hash by default
            attributes: { exclude: ['passwordHash'] }
        },
        scopes: {
            // Include password hash with this scope
            withHash: { attributes: { include: ['passwordHash'] } }
        }
    };

    return sequelize.define('User', attributes, options);
}