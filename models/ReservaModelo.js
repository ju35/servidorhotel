//se importan utilidades de mongoose
const { model, Schema } = require('mongoose')

//creamos el esquema de datos
const JugadorModelo = Schema({

    nombre: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    telefono: {
        type: Number,
        required: true
    },

    fechaE: {
        type: Number,
        required: true
    },

    fechaS: {
        type: Number,
        required: true
    }
    
    

})

module.exports = model('Reserva', ReservaModelo)