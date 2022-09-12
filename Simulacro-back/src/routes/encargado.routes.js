'use strict'

const express = require('express')
const api = express.Router()
const controladorEncargado = require('../controllers/encargado.controller')
const mdAuth = require('../middlewares/authenticated')

api.post('/login', controladorEncargado.login)
api.get('/obtenerAlumnos', mdAuth.ensureAuth, controladorEncargado.obtenerAlumnos)

module.exports = api