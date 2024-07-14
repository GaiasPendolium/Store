// routes/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Endpoint POST /api/login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verifica si el usuario existe
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // Verifica la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // Genera y devuelve un token JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, 'jwtSecret', { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });

    } catch (error) {
        console.error('Error en el login:', error.message);
        res.status(500).send('Error del servidor');
    }
});

module.exports = router;
