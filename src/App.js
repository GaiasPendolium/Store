import React, { useState } from 'react';
import AgregarProducto from './components/AgregarProducto';
import ModificarProducto from './components/modificarProducto'; // Asegúrate de que la capitalización coincida con el nombre real del archivo
import AgregarUnidades from './components/AgregarUnidades';
import ListarProductos from './components/ListarProductos';
import ListarVentas from './components/ListarVentas';
import ListarProductosDisponibles from './components/ListarProductosDisponibles';
import SeleccionarProductos from './components/SeleccionarProductos';
import ConfirmarCompra from './components/ConfirmarCompra';
import React from 'react';
import Login from 'C:\Users\theda\mi-tienda\src\login.js';

function App() {
    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', valor: 100, cantidad: 10 },
        { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', valor: 150, cantidad: 15 },
        { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', valor: 200, cantidad: 5 }
    ]);

    const [ventas, setVentas] = useState([
        { id: 1, producto: 'Producto 1', valor: 100 },
        { id: 2, producto: 'Producto 2', valor: 150 }
    ]);

    const [carrito, setCarrito] = useState([]);

    // Funciones para el administrador
    const agregarProducto = (nuevoProducto) => {
        const id = productos.length + 1;
        setProductos([...productos, { id, ...nuevoProducto }]);
    };

    const modificarProducto = (id, productoModificado) => {
        const productosActualizados = productos.map(producto =>
            producto.id === id ? { ...producto, ...productoModificado } : producto
        );
        setProductos(productosActualizados);
    };

    const agregarUnidades = (id, unidades) => {
        const productosActualizados = productos.map(producto =>
            producto.id === id ? { ...producto, cantidad: producto.cantidad + parseInt(unidades) } : producto
        );
        setProductos(productosActualizados);
    };

    // Funciones para el cliente
    const seleccionarProducto = (productosSeleccionados) => {
        setCarrito(productosSeleccionados);
    };

    const confirmarCompra = (productosComprados) => {
        const valorTotal = productosComprados.reduce((total, producto) => total + producto.valor, 0);
        setVentas([...ventas, { id: ventas.length + 1, producto: productosComprados.map(p => p.nombre).join(', '), valor: valorTotal }]);
        const productosActualizados = productos.map(producto => {
            if (productosComprados.find(p => p.id === producto.id)) {
                return { ...producto, cantidad: producto.cantidad - 1 };
            }
            return producto;
        });
        setProductos(productosActualizados);
        setCarrito([]);
    };

    return (
        <div className="container mt-4">
            <AgregarProducto agregarProducto={agregarProducto} />
            <ModificarProducto productos={productos} modificarProducto={modificarProducto} />
            <AgregarUnidades productos={productos} agregarUnidades={agregarUnidades} />
            <ListarProductos productos={productos} />
            <ListarVentas ventas={ventas} />
            <ListarProductosDisponibles productos={productos} />
            <SeleccionarProductos productos={productos.filter(p => p.cantidad > 0)} seleccionarProducto={seleccionarProducto} />
            <ConfirmarCompra carrito={carrito} confirmarCompra={confirmarCompra} />
        </div>
    );
    const App = () => {
        return (
            <div className="App">
                <h1>Mi Tienda - Sistema de Gestión</h1>
                <Login />
            </div>
        );
    };
    
}

export default App;
