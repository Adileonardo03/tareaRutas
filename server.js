const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = 3010;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para obtener los datos del JSON
app.get('/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer el archivo JSON');
            return;
        }
        res.json(JSON.parse(data)); // Envía el contenido del JSON como respuesta
    });
});

// Rutas principales del servidor
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});