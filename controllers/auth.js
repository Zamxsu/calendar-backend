const { response } = require('express')
const Usuario = require('../models/Usuario')



const crearUsuario = async( req, res = response ) => {

    // const { name, email, password } =  req.body 

    try {
        
        const usuario =  new Usuario( req.body );
    
        await usuario.save();
        
        res.status(201).json({
            ok: true,
            msg: 'registro',
        })
        
    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
        
    }
    

} 

const loginUsuario = ( req, res = response ) => {

    const { email, password } =  req.body 

    model
    
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