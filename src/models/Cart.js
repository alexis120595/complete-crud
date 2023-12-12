const { DataTypes } = require('sequelize');	



module.exports = (sequelize) => {

    sequelize.define('Cart', {
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
         price : {
              type: DataTypes.INTEGER,
              allowNull: false
         },
    },
    {
        timestamps: false
    }
    );
};




