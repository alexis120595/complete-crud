const {Client} = require('../db');

const getAllClients = async () => {
    const clients = await Client.findAll();

    return clients;
};

const getClientByName = async (name) => {

    const client = await Client.findOne({
        where: {
            name
        }
    });

    return client;
}

const getClientById = async (id) => {
    const client = await Client.findByPk(id);

    return client;
};

const createNewClient = async (id, name, phone) => {
    await Client.create({
        id,
        name,
        phone
    });
};

const deleteClient = async (id) => {

    await Client.destroy({
        where: {
            id
        }
    });
};

const updateClient = async (id, name, phone) => {

    await Client.update({
        name,
        phone
    }, {
        where: {
            id
        }
    });
}

module.exports = {
    getAllClients,
    getClientByName,
    getClientById,
    createNewClient,
    deleteClient,
    updateClient
}