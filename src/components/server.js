const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');

// Conectar a MongoDB
connectDB();

const app = express();

// Middleware para parsear JSON
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const productRoutes = require('./routes/productRoutes');

// Montar rutas
app.use('/api/products', productRoutes);
