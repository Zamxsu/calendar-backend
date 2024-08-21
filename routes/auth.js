const { Router } = require('express')
const router = Router()
const { crearUsuario, loginUsuario, revalidarUsuario } = require('../controllers/auth')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarjwt } = require('../middlewares/validar-jwt');

router.post(
    '/new', 
    [ // MiddleWare
        check('name', 'Nombre es obligatorio y debe ser de mas de 3 caracteres').not().isEmpty().isLength({ min: 3 }),
        check('email', 'El Email es obligatorio').isEmail(),
        check('password', 'Password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
     ] , 
    crearUsuario 
);

router.post(
    '/', 
    [ // MiddleWare
        check('email', 'El Email es obligatorio').isEmail(),
        check('password', 'Password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario
);

router.get('/renew', validarjwt ,revalidarUsuario);




module.exports = router;
