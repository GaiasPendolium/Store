import React, { useState } from 'react';

function AgregarUnidades({ producto, agregarUnidades }) {
    const [unidades, setUnidades] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarUnidades(producto.id, unidades);
        setUnidades(0);
    };

    return (
        <div className="card my-4">
            <div className="card-header">
                <h2>Agregar Unidades al Producto</h2>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Producto: {producto.nombre}</label>
                    </div>
                    <div className="form-group">
                        <label>Cantidad a Agregar:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={unidades}
                            onChange={(e) => setUnidades(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Agregar Unidades</button>
                </form>
            </div>
        </div>
    );
}

export default AgregarUnidades;