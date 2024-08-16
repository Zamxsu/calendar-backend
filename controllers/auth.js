const express = require('express')

const crearUsuario = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'registro'
    })
    

}

const loginUsuario = ( req, res ) => {

    res.json({
            ok: true,
            msg: 'login'
    })
        
}

const revalidarUsuario = ( req, res ) => {

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