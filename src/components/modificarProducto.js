import React, { useState } from 'react';

function ModificarProducto({ producto, modificarProducto }) {
    const [nombre, setNombre] = useState(producto.nombre);
    const [descripcion, setDescripcion] = useState(producto.descripcion);
    const [valor, setValor] = useState(producto.valor);
    const [cantidad, setCantidad] = useState(producto.cantidad);

    const handleSubmit = (e) => {
        e.preventDefault();
        const productoModificado = {
            ...producto,
            nombre,
            descripcion,
            valor,
            cantidad
        };
        modificarProducto(producto.id, productoModificado);
    };

    return (
        <div className="card my-4">
            <div className="card-header">
                <h2>Modificar Producto</h2>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nombre del Producto:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripción:</label>
                        <textarea
                            className="form-control"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Valor:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={valor}
                            onChange={(e) => setValor(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Cantidad en Stock:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={cantidad}
                            onChange={(e) => setCantidad(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                </form>
            </div>
        </div>
    );
}

export default ModificarProducto;