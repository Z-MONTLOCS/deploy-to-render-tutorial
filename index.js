const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Puerto en el que escuchará el servidor

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Escuchar en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
