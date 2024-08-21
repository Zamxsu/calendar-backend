const { Router } = require('express')
const router = Router()
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events")
const { validarjwt } = require('../middlewares/validar-jwt');

router.use( validarjwt )

// Obtener eventos
router.get('/', getEventos)

// Crear un evento
router.post('/', crearEvento )

// Actualizar evento 
router.put('/:id', actualizarEvento )

// Borrar evento 
router.delete('/:id', eliminarEvento )

module.exports = router;
