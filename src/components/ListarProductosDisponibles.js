import React from 'react';

function ListarProductosDisponibles({ productos }) {
    const productosDisponibles = productos.filter(producto => producto.cantidad > 0);

    return (
        <div className="card my-4">
            <div className="card-header">
                <h2>Listado de Productos con Existencias Disponibles</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {productosDisponibles.map(producto => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={producto.id}>
                            {producto.nombre}
                            <span className="badge badge-primary badge-pill">${producto.valor}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListarProductosDisponibles;