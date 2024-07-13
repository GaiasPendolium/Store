import React, { useState } from 'react';

function SeleccionarProductos({ productos, seleccionarProducto }) {
    const [seleccionados, setSeleccionados] = useState([]);

    const handleSeleccionar = (producto) => {
        const nuevosSeleccionados = [...seleccionados, producto];
        setSeleccionados(nuevosSeleccionados);
        seleccionarProducto(nuevosSeleccionados);
    };

    return (
        <div className="card my-4">
            <div className="card-header">
                <h2>Seleccionar Productos</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {productos.map(producto => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={producto.id}>
                            {producto.nombre}
                            <button className="btn btn-secondary btn-sm" onClick={() => handleSeleccionar(producto)}>Seleccionar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SeleccionarProductos;