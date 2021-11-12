const express = require('express');
const connectionDB = require('./config/db');
const cors = require('cors');

//crear el servidor
const app = express();

//conectar a la base de datos
connectionDB();

//habilitar cors
app.use(cors());

//habilitar express.json=leer datos que el usuario coloque
app.use(express.json({extended: true}));

//puerto de la app
const port = process.env.PORT || 4000;

//importar rutas
app.use('/api/formulario', require('./route/formulario'));

//arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`puerto ${port}`);
});