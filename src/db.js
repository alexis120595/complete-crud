const { Sequelize } = require('sequelize');

const CartModel = require('./models/Cart');

const ClientModel = require('./models/Client');

//require('dotenv').config();

//const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const DB_USER = 'postgres';
const DB_PASSWORD = '123456';
const DB_HOST = 'localhost';



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/hamburguesa` , {logging: false });

 CartModel(sequelize);

ClientModel(sequelize);

const { Cart, Client } = sequelize.models;

Client.hasOne(Cart);

Cart.belongsTo(Client);

module.exports = {sequelize, ...sequelize.models};