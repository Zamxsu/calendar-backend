const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()

const { isDate } = require('../helpers/isDate')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events")
const { validarCampos } = require('../middlewares/validar-campos')
const { validarjwt } = require('../middlewares/validar-jwt');

router.use( validarjwt )

// Obtener eventos
router.get('/', getEventos)

// Crear un evento
router.post(
    '/', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio obligatoria').custom( isDate ),
        check('end', 'Fecha de finalizacion obligatoria').custom( isDate ),
        validarCampos
    ] ,
    crearEvento 
)

// Actualizar evento 
router.put('/:id', actualizarEvento )

// Borrar evento 
router.delete('/:id', eliminarEvento )

module.exports = router;
