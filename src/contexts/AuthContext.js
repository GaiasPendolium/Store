import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado para el usuario autenticado

    const login = async (email, password) => {
        try {
            // Lógica para enviar los datos de login al backend
            const response = await axios.post('/api/login', { email, password });
            setUser(response.data.user); // Establece el usuario autenticado en el estado
        } catch (error) {
            console.error('Error en el login:', error);
            throw error; // Puedes manejar el error según tu lógica de aplicación
        }
    };

    const logout = () => {
        // Limpia el usuario autenticado
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
