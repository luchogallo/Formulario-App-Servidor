const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.DB_TESTS, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada');
    } catch(error) {
        console.log(error);
        process.exit(1); //detener la app
    }
}

module.exports = connectionDB