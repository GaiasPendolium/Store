import React from 'react';

function ListarProductos({ productos }) {
    return (
        <div className="card my-4">
            <div className="card-header">
                <h2>Listado de Productos Disponibles</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {productos.map(producto => (
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

export default ListarProductos;