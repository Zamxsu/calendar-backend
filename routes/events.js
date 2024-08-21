const { Router } = require('express')
const router = Router()
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events")
const { validarjwt } = require('../middlewares/validar-jwt');

// Obtener eventos
router.get('/', validarjwt ,getEventos)

// Crear un evento
router.post('/', validarjwt ,crearEvento )

// Actualizar evento 
router.put('/:id', validarjwt ,actualizarEvento )

// Borrar evento 
router.delete('/:id', validarjwt ,eliminarEvento )

module.exports = router;
