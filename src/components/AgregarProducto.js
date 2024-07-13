import React, { useState } from 'react';

function AgregarProducto({ agregarProducto }) {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [valor, setValor] = useState(0);
    const [cantidad, setCantidad] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoProducto = {
            nombre,
            descripcion,
            valor,
            cantidad
        };
        agregarProducto(nuevoProducto);
        setNombre('');
        setDescripcion('');
        setValor(0);
        setCantidad(0);
    };

    return (
        <div className="card my-4">
            <div className="card-header">
                <h2>Agregar Nuevo Producto</h2>
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
                    <button type="submit" className="btn btn-primary">Agregar Producto</button>
                </form>
            </div>
        </div>
    );
}

export default AgregarProducto;