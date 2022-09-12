'use strict'

const mongoose = require('mongoose')

const alumnoSchema = mongoose.Schema({
    carnet: String,
    nombreCompleto: String,
    género: String,
    edad: String,
    teléfono: Number,
    fechaDeNacimiento: String,
    carrera: String,
    géneroPoesía: String,
    fechaInscripción: String,
    fechaDeclamación: String
})

module.exports = mongoose.model('alumno', alumnoSchema)