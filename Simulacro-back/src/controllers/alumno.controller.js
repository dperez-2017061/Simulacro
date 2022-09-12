'use strict'

const Alumno = require('../models/alumno.model')
const moment = require('moment/moment')
const { validación, validarFecha } = require('../utils/validate')
require('moment-timezone')

exports.inscribirse = async (req, res) => {
    try {
        const params = req.body
        const data = {
            carnet: params.carnet,
            nombreCompleto: params.nombreCompleto,
            género: params.género,
            teléfono: params.teléfono,
            fechaDeNacimiento: params.fechaDeNacimiento,
            carrera: params.carrera,
            géneroPoesía: params.géneroPoesía,
            fechaInscripcion: moment().format('DD MMMM YYYY, h:mm:s')
        }
        const message = await validación(data)
        if (message) return res.status(400).send({ message })
        if (data.carnet.length !== 6) return res.status(400).send({ message: 'El carnet debe de tener 6 caracteres' })
        if (data.carnet[0] !== 'A') return res.status(400).send({ message: 'El carnet debe empezar con A' })
        if (Number(data.carnet[2]) !== 5) return res.status(400).send({ message: 'El tercer caracter debe ser 5' })

        const ultimo = Number(data.carnet[5])
        if (ultimo !== 1 && ultimo !== 3 && ultimo !== 9) return res.status(400).send({ message: 'El último caracter debe ser ser 1, 3 o 9' })
        moment.locale('es')
        moment.tz.setDefault('America/Guatemala')

        const años = moment().diff(moment(data.fechaDeNacimiento), 'years')
        if (años < 17) return res.status(400).send({ message: 'Debe tener mínimo 17 años para inscribirse' })
        data.edad = años
        data.fechaDeNacimiento = moment(data.fechaDeNacimiento).format('DD-MM-YYYY')

        if (ultimo === 1 && data.géneroPoesía === 'Dramática') {
            let fechaDeclamacion = moment().add(5, 'days')
            fechaDeclamacion = await validarFecha(fechaDeclamacion)
            data.fechaDeclamación = fechaDeclamacion.format('dddd DD [de] MMMM [del] YYYY, h:mm a')
        } else if (ultimo === 3 && data.géneroPoesía === 'Épica') {
            let fechaDeclamacion = moment().endOf('month')
            fechaDeclamacion = await validarFecha(fechaDeclamacion)
            const diff = fechaDeclamacion.diff(moment(), 'days')
            data.fechaDeclamación = moment().add(diff, 'days').format('dddd DD [de] MMMM [del] YYYY, h:mm a')
        } else {
            let fechaDeclamacion = moment()
            fechaDeclamacion = await validarFecha(fechaDeclamacion)
            const diff = fechaDeclamacion.endOf('week').subtract(2, 'days').diff(moment(), 'days')
            data.fechaDeclamación = moment().add(diff, 'days').format('dddd DD [de] MMMM [del] YYYY, h:mm a')
        }

        const alumno = new Alumno(data)
        await alumno.save()
        return res.send({ alumno, message: 'Se inscribió correctamente' })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: 'Error durante la inscripción' })
    }
}
exports.obtenerAlumno = async (req, res) => {
    try {
        const idAlumno = req.params.idA
        const alumno = await Alumno.findOne({ _id: idAlumno })

        return res.send({ alumno })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: 'Error obteniendo alumno' })
    }
}
