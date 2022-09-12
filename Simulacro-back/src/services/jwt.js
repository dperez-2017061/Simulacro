'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const secretKey = 'SimulacroReact'

exports.createToken = async (user) => {
    try {
        const payload = {
            sub: user._id,
            usuario: user.usuario,
            contraseña: user.contraseña,
            iat: moment().unix(),
            exp: moment().add(1, 'hour').unix()
        }

        return jwt.encode(payload, secretKey)
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: 'Error creando token' })
    }
}