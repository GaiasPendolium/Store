// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Importa el modelo de usuario definido

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON en las solicitudes
app.use(bodyParser.json());

// Conexión a MongoDB con Mongoose
mongoose.connect('mongodb://localhost:27017/mi_tienda', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Endpoint para el login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar el usuario por nombre de usuario en la base de datos
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        // Comparar la contraseña ingresada con la contraseña almacenada
        const match = await bcrypt.compare(password, user.passwordHash);

        if (match) {
            // Si las contraseñas coinciden, enviar una respuesta exitosa
            res.json({ success: true, message: 'Login successful' });
        } else {
            // Si las contraseñas no coinciden, enviar una respuesta de error
            res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
