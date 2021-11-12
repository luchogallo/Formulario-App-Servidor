const express = require('express');
const router = express.Router();
const formularioController = require('../controller/formularioController');
const {check} = require('express-validator');

// Crea formulario
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('pais', 'El pais es obligatorio').not().isEmpty(),
    ],
    formularioController.crearFormulario
);

module.exports = router;