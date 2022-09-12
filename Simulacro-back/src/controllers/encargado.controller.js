'use strict'

const Encargado = require('../models/encargado.model');
const Alumno = require('../models/alumno.model')
const { encriptar, validación, checkPassword } = require('../utils/validate');
const jwt = require('../services/jwt')

exports.crearEncargado = async () => {
    try {
        const encargadoExiste = await Encargado.findOne({ usuario: 'Rodrigo' })
        if (encargadoExiste) return
        const data = {
            usuario: 'Rodrigo',
            contraseña: await encriptar('123456')
        }
        const encargado = new Encargado(data)
        await encargado.save()
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: 'Error creando encargado' })
    }
}

exports.login = async (req, res) => {
    try {
        const params = req.body
        const data = {
            usuario: params.usuario,
            contraseña: params.contraseña
        }

        const message = await validación(data)
        if (message) return res.status(500).send({ message })
        const encargadoExiste = await Encargado.findOne({ usuario: data.usuario })
            .lean()

        if (!encargadoExiste || !await checkPassword(data.contraseña, encargadoExiste.contraseña)) return res.status(401).send({ message: 'Credenciales inválidas' })
        const token = await jwt.createToken(encargadoExiste)

        return res.send({ token, message: 'Inicio de sesión satisfactorio' })

    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: 'Error iniciando sesión' })
    }
}

exports.obtenerAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find()
        return res.send({ alumnos })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: 'Error obteniendo alumnos' })
    }
}