'use strict'

const express = require('express')
const api = express.Router()
const controladorAlumno = require('../controllers/alumno.controller')

api.post('/inscribirse', controladorAlumno.inscribirse)
api.get('/obtenerAlumno/:idA', controladorAlumno.obtenerAlumno)

module.exports = api