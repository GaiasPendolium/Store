import React from 'react';

function Ventas() {
    return (
        <div className="card my-4">
            <div className="card-header">
                <h2>Ventas</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">Producto 1 - 2 - $10</li>
                    <li className="list-group-item">Producto 2 - 1 - $20</li>
                </ul>
            </div>
        </div>
    );
}

export default Ventas;