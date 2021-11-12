const mongoose = require('mongoose');

const FormularioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    pais: {
        type: String,
        required: true,
        trim: true
    },
    creado: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Formulario', FormularioSchema);