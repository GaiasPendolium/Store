import React, { useEffect, useState } from 'react';
import data from '../data.json';

function VisualizarVentas() {
    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        setVentas(data.ventas);
    }, []);

    return (
        <div className="card my-4">
            <div className="card-header">
                <h2>Visualizar Ventas</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {ventas.map(venta => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={venta.id}>
                            {venta.producto}
                            <span className="badge badge-success badge-pill">${venta.precio}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default VisualizarVentas;