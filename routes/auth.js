const { Router } = require('express')
const router = Router()
const { crearUsuario, loginUsuario, revalidarUsuario } = require('../controllers/auth')
const { check } = require('express-validator')

router.post(
    '/new', 
    [ // MiddleWare
        check('name', 'Nombre es obligatorio').not().isEmpty(),
        check('email', 'El Email es obligatorio').isEmail(),
        check('password', 'Password debe de ser de 6 caracteres').isLength({ min: 6 })
     ] , 
    crearUsuario 
);

router.post(
    '/', 
    [ // MiddleWare
        check('email', 'El Email es obligatorio').isEmail(),
        check('password', 'Password debe de ser de 6 caracteres').isLength({ min: 6 })
    ],
    loginUsuario
);

router.get('/renew', revalidarUsuario);


module.exports = router;
