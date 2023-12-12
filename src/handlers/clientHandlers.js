const {getAllClients, getClientByName, getClientById, createNewClient, deleteClient, updateClient} = require('../controllers/clientControllers');

const getClienstHandler = async (req, res) => {

    const {name} = req.query;

    try {
        const result = name ? await getClientByName(name) : await getAllClients();
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

const getClientByIdHandler = async (req, res) => {
    
        const {id} = req.params;
    
        try {
            const client = await getClientById(id);
            res.status(200).json(client);
        } catch (error) {
            res.status(404).json({error: error.message});
        }
    };

const createNewClientHandler = async (req, res) => {
    
        try {
            const {id, name, phone} = req.body;
    
            const newClient = await createNewClient(id, name, phone);
    
            res.status(201).json(newClient);
      
        } catch(error){
            
            res.status(400).json({error: error.message});
        }
      
    };

    const deleteClientHandler = async (req, res) => {

        const { id } = req.params;

        try {

            const client = await deleteClient(id);

            res.status(200).json(client);

        } catch (error) {

            res.status(404).json({error: error.message});

        }

    };

    const updateClientHandler = async (req, res) => {

        const { id } = req.params;

        try {

            const { name, phone } = req.body;

            const client = await updateClient(id, name, phone);

            res.status(200).json(client);

        } catch (error) {

            res.status(404).json({error: error.message});

        }

    }

module.exports = {
    getClienstHandler,
    getClientByIdHandler,
    createNewClientHandler,
    deleteClientHandler,
    updateClientHandler
};