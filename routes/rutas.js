const { Router } = require('express')
const rutas = Router();

//IMPORTO LOS CONTROLADORES

const { registraReserva } = require('../controllers/controlador.js')
const { buscarReserva } = require('../controllers/controlador.js')
const { buscarReserva } = require('../controllers/controlador.js')
const { editarReserva } = require('../controllers/controlador.js')
const { eliminarReserva } = require('../controllers/controlador.js')



rutas.get('/avanzada/v1/jugadores', buscarReserva)
rutas.get('/avanzada/v1/jugadores/:id', buscarReserva)
rutas.post('/avanzada/v1/jugadores', registraReserva)
rutas.put('/avanzada/v1/jugadores/:id', editarReserva)
rutas.delete('/avanzada/v1/jugadores/:id', eliminarReserva)

module.exports = rutas