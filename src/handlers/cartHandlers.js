const {createProduct, getProductById, getProductByName, getAllProducts, deleteProduct, updateProduct  } = require("../controllers/cartControllers");


const getCartHandlrer = async (req, res) => {   

    const {name} = req.query;

    try {

        const result = name ? await getProductByName(name) : await getAllProducts();

        res.status(200).json(result);
    
        
    } catch (error) {

        res.status(404).json({error: error.message});
        
    }

   


   
};

const getProductoByIdHandler = async  (req, res) => {

    const {id} = req.params;

    try {
        const product =  await getProductById(id);

        res.status(200).json(product);
    } catch(error){
        res.status(404).json({error: error.message});
    }
};

const createNewProductHandler = async (req, res) => {

    try {
        const {id, name, price} = req.body;

        const newProduct = await createProduct(id, name, price);

        res.status(201).json(newProduct);
  
    } catch(error){
        
        res.status(400).json({error: error.message});
    }
  
};


const deleteProductHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await deleteProduct(id);

        if (result === 0) {
            throw new Error('Product not found');
        }

        res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateProductHandler = async (req, res) => {

    const { id } = req.params;
    const { name, price } = req.body;

    try {
        const product = await getProductById(id);

        if (!product) {
            throw new Error('Product not found');
        }

        const updatedProduct = await updateProduct(id, name, price);

        res.status(200).json(updatedProduct);
    } catch (error) {

        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getCartHandlrer,
    getProductoByIdHandler,
    createNewProductHandler,
    deleteProductHandler,
    updateProductHandler
};