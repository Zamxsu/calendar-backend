const { response } = require('express')
const { generarJWT } = require('../helpers/jwt')


const getEventos = async( req, res = response ) => {

    const uid = req.uid;
    const name = req.name

    const token = await generarJWT( uid, name )

    res.json({
        ok: true,
        msg: 'getEventos',
        token
    })

}

const crearEvento = async( req, res = response ) => {

    const uid = req.uid;
    const name = req.name

    const token = await generarJWT( uid, name )

    res.json({
        ok: true,
        msg: 'crearEvento',
        token
    })

}

const actualizarEvento = async( req, res = response ) => {

    const uid = req.uid;
    const name = req.name

    const token = await generarJWT( uid, name )

    res.json({
        ok: true,
        msg: 'actualizarEvento',
        token
    })

}

const eliminarEvento = async( req, res = response ) => {

    const uid = req.uid;
    const name = req.name

    const token = await generarJWT( uid, name )

    res.json({
        ok: true,
        msg: 'eliminarEvento',
        token
    })

}


module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento  

}