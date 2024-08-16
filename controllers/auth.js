const express = require('express')

const crearUsuario = ( req, res = response ) => {

    const { name, email, password } =  req.body 

    if( name.length < 5 ) {
        return res.status(400).json({
            ok: false,
            msg: 'El nombre debe de ser de 5 letras'
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

    res.json({
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