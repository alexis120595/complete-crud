const {Router} = require('express');
const cartaRouter = require('./cartaRouter');
const clientRouter = require('./clientRouter');

const mainRouter = Router();

mainRouter.use('/carta', cartaRouter);

mainRouter.use('/client', clientRouter);

module.exports = mainRouter;