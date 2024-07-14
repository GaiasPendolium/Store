const Product = require('../models/product');

// Crear un nuevo producto
const createProduct = async (req, res) => {
    try {
        const { nombre, descripcion, valor, cantidad } = req.body;
        const newProduct = new Product({ nombre, descripcion, valor, cantidad });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createProduct };
// Actualizar un producto
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, valor, cantidad } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, { nombre, descripcion, valor, cantidad }, { new: true });
        if (!updatedProduct) throw new Error('Product not found');
        res.json(updatedProduct);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = { createProduct, updateProduct };
// Eliminar un producto
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) throw new Error('Product not found');
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = { createProduct, updateProduct, deleteProduct };
// Listar productos disponibles
const getAvailableProducts = async (req, res) => {
    try {
        const availableProducts = await Product.find({ cantidad: { $gt: 0 } });
        res.json(availableProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createProduct, updateProduct, deleteProduct, getAvailableProducts };
