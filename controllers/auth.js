const {response} = require('express')

const crearUsuario = (req, res = response) => {

    console.log(req.body);

    res.json({
        ok: true,
        msg: 'Login'
    })
}

const loginUsuario = (req, res) => {

    res.json({
        ok: true,
        msg: 'register'

    })
}

const revalidarToken = (req, res) => {

    res.json({
        ok: true,
        msg: 'renew'

    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
}