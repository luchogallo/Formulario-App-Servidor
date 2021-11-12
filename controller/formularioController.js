const Formulario = require('../model/Formulario');
const { validationResult } = require('express-validator');

exports.crearFormulario = async(req, res) => {
    
    //revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array() })
    }

    try {
        // Crear el formulario
        const formulario = new Formulario(req.body);

        //guardamos el formulario
        formulario.save();
        res.json(formulario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
