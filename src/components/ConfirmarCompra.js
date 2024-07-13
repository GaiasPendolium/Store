import React from 'react';

function ConfirmarCompra({ carrito, confirmarCompra }) {
    const valorTotal = carrito.reduce((total, producto) => total + producto.valor, 0);

    const handleConfirmarCompra = () => {
        confirmarCompra(carrito);
    };

    return (
        <div className="card my-4">
            <div className="card-header">
                <h2>Confirmar Compra</h2>
            </div>
            <div className="card-body">
                <h3>Productos Seleccionados:</h3>
                <ul className="list-group">
                    {carrito.map(producto => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={producto.id}>
                            {producto.nombre}
                            <span className="badge badge-primary badge-pill">${producto.valor}</span>
                        </li>
                    ))}
                </ul>
                <h3>Valor Total a Pagar: ${valorTotal}</h3>
                <button className="btn btn-primary" onClick={handleConfirmarCompra}>Pagar</button>
            </div>
        </div>
    );
}

export default ConfirmarCompra;