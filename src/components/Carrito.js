import React, { useEffect, useState } from 'react';
import data from '../data.json';

function Carrito() {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        setCarrito(data.carrito);
    }, []);

    return (
        <div className="card my-4">
            <div className="card-header">
                <h2>Carrito de Compras</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {carrito.map(item => (
                        <li className="list-group-item" key={item.id}>
                            {item.nombre} - {item.cantidad} - ${item.precio}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Carrito;