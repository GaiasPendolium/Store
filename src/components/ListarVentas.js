import React from 'react';

function ListarVentas({ ventas }) {
    return (
        <div className="card my-4">
            <div className="card-header">
                <h2>Listado de Ventas Realizadas</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {ventas.map(venta => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={venta.id}>
                            {venta.producto}
                            <span className="badge badge-success badge-pill">${venta.valor}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListarVentas;