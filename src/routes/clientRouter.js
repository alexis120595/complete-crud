const {Router} = require('express');

const clientRouter = Router();  

const {getClienstHandler, getClientByIdHandler, createNewClientHandler, updateClientHandler, deleteClientHandler} = require('../handlers/clientHandlers');

clientRouter.get("/",getClienstHandler);

clientRouter.get("/:id",getClientByIdHandler);

clientRouter.post("/", createNewClientHandler);

clientRouter.put("/:id",updateClientHandler );

clientRouter.delete("/:id", deleteClientHandler);

module.exports = clientRouter;