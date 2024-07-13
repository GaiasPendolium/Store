import React, { useEffect, useState } from 'react';
import data from '../data.json';

function VisualizarProductos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(data.productos);
    }, []);

    return (
        <div className="card my-4">
            <div className="card-header">
                <h2>Visualizar Productos</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {productos.map(producto => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={producto.id}>
                            {producto.nombre}
                            <span className="badge badge-primary badge-pill">${producto.precio}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default VisualizarProductos;