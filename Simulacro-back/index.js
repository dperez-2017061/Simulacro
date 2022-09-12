'use strict'

const app = require('./configs/app')
const mongo = require('./configs/mongo')
const controladorEncargado = require('./src/controllers/encargado.controller')

app.inicioServidor()
mongo.inicio()
controladorEncargado.crearEncargado()
