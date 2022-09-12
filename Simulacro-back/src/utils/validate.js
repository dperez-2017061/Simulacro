'use strict'

const bcrypt = require('bcrypt-nodejs')

exports.validación = async (data) => {
    let keys = Object.keys(data), msg = ''

    for (let key of keys) {
        let param = data[key]
        if (param !== null && param !== undefined && param !== '' && param !== 0)
            continue
        msg += `El párametro ${key} es obligatorio\n`
    }
    return msg.trim()
}

exports.validarFecha = async (fechaDeclamacion) => {
    const fechaInvalida = fechaDeclamacion.format('dddd')
    if (fechaInvalida.toLowerCase() === 'sábado')
        return fechaDeclamacion.add(2, 'days')
    else if (fechaInvalida.toLowerCase() === 'domingo')
        return fechaDeclamacion.add(1, 'days')
    return fechaDeclamacion
}

exports.encriptar = async (contraseña) => {
    try {
        return bcrypt.hashSync(contraseña)
    } catch (err) {
        console.log(err)
        return err
    }
}

exports.checkPassword = async (password, hash) => {
    try {
        return bcrypt.compareSync(password, hash)
    } catch (err) {
        console.log(err)
        return err
    }
}