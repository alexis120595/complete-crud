const {Router} = require('express');

const cartaRouter = Router();

const {getCartHandlrer, getProductoByIdHandler, createNewProductHandler, updateProductHandler, deleteProductHandler} = require('../handlers/cartHandlers');

cartaRouter.get("/",getCartHandlrer);

cartaRouter.get("/:id",getProductoByIdHandler);

cartaRouter.post("/", createNewProductHandler);

cartaRouter.put("/:id",updateProductHandler );

cartaRouter.delete("/:id", deleteProductHandler);



module.exports = cartaRouter;