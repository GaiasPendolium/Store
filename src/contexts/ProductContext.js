import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get('/api/productos');
                setProductos(response.data);
            } catch (error) {
                console.error('Error al cargar productos:', error);
            }
        };
        fetchProductos();
    }, []);

    const agregarProducto = async (nuevoProducto) => {
        try {
            const response = await axios.post('/api/productos', nuevoProducto);
            setProductos([...productos, response.data]);
        } catch (error) {
            console.error('Error al agregar producto:', error);
            throw error;
        }
    };

    const modificarProducto = async (id, productoModificado) => {
        try {
            const response = await axios.put(`/api/productos/${id}`, productoModificado);
            setProductos(productos.map(producto =>
                producto.id === id ? response.data : producto
            ));
        } catch (error) {
            console.error('Error al modificar producto:', error);
            throw error;
        }
    };

    const eliminarProducto = async (id) => {
        try {
            await axios.delete(`/api/productos/${id}`);
            setProductos(productos.filter(producto => producto.id !== id));
        } catch (error) {
            console.error('Error al eliminar producto:', error);
            throw error;
        }
    };

    return (
        <ProductContext.Provider value={{ productos, agregarProducto, modificarProducto, eliminarProducto }}>
            {children}
        </ProductContext.Provider>
    );
};
