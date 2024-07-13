import React, { useEffect, useState } from 'react';
import data from '../data.json';

function ListaProductosCliente() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(data.productos);
    }, []);

    return (
        <div className="card my-4">
            <div className="card-header">
                <h2>Productos Disponibles</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {productos.map(producto => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={producto.id}>
                            {producto.nombre}
                            <div>
                                <span className="badge badge-primary badge-pill mr-3">${producto.precio}</span>
                                <button className="btn btn-secondary btn-sm">Añadir al Carrito</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListaProductosCliente;