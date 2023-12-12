const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes');


const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(mainRouter);

app.use((req, res, next) => {
    console.log("pase por el mid");
    next();
});



module.exports = app;