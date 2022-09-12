'use strict'

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const port = process.env.PORT || 3200

const app = express()

const rutasAlumno = require('../src/routes/alumno.routes')
const rutasEncargado = require('../src/routes/encargado.routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use('/alumno', rutasAlumno)
app.use('/encargado', rutasEncargado)

exports.inicioServidor = ()=> app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`)
})