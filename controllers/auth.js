const express = require('express')
const { validationResult } = require('express-validator')

const crearUsuario = ( req, res = response ) => {

    const { name, email, password } =  req.body 

    // Manejo de errores

    const errorsRegister = validationResult( req )
    if ( !errorsRegister.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errorsRegister.mapped()
        })
    }
    
    
    res.status(201).json({
        ok: true,
        msg: 'registro',
        name, 
        email,
        password
    })
    

} 

const loginUsuario = ( req, res = response ) => {

    const { email, password } =  req.body 

    const errorsLogin = validationResult( req )
    if ( !errorsLogin.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errorsLogin.mapped()
        })
    }

    
    res.status(201).json({
            ok: true,
            msg: 'login',
            email, 
            password,
    })
        
}

const revalidarUsuario = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'login'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarUsuario,
}