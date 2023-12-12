const { Cart } = require('../db');


const createProduct = async (id, name, price) => {
    await Cart.create({
        id,
        name,
        price
    });

};

const getProductById = async (id) => {
    const product = await Cart.findByPk(id);

    return product;
    
};

const getProductByName = async (name) => {
    const product = await Cart.findOne({
        where: {
            name
        }
    });

    return product;
};

const getAllProducts = async () => {
    const products = await Cart.findAll();

    return products;
};



const deleteProduct = async (id) => {
    await Cart.destroy({
        where: {
            id
        }
    });
}

const updateProduct = async (id, name, price) => {
    await Cart.update({
        name,
        price
    }, {
        where: {
            id
        }
    });
}



module.exports = {
    createProduct,
    getProductById,
    getProductByName,
    getAllProducts,
    deleteProduct,
    updateProduct
}