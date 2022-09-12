'use strict'

const mongoose = require('mongoose')

const encargadoSchema = mongoose.Schema({
    usuario: String,
    contraseña: String
})

module.exports = mongoose.model('encargado', encargadoSchema)