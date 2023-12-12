const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Client', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone : {
            type: DataTypes.STRING,
            allowNull: false
    },
},
    {
        timestamps: false
    }
    );
}