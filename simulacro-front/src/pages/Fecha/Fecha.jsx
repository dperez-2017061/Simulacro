import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { url } from '../../GlobalUrl'
import './Fecha.css'

export const Fecha = () => {
    const { idA } = useParams()
    const [fecha, setFecha] = useState()
    const [hora, setHora] = useState()
    const [am, setAm] = useState()

    useEffect(() => {
        axios.get(url + 'alumno/obtenerAlumno/' + idA)
            .then(res => {
                console.log('a')
                const fechaD = res.data.alumno.fechaDeclamación.split(',')
                setFecha(fechaD[0])
                const horaD = fechaD[1].split(':')
                setHora(horaD[0])
                const amD = horaD[1].split(' ')
                setAm(amD)
            })
            .catch(err => {
                if (!err.response.data.message) return
                Swal.fire({
                    title: err.response.data.message,
                    icon: 'error',
                    position: 'center',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                })
            })
    }, [])

    return (
        <div className='div'>
            <p style={{ color: 'black', fontSize: '32px', paddingBottom: '40px' }}>Fecha en la que debera de declamar:</p>
            {fecha &&
                <div className="widget">
                    <div className="fecha">
                        <p id="diaSemana" className="diaSemana">{fecha}</p>
                    </div>

                    <div className="reloj">
                        <p id="horas" className="horas">{hora}</p>
                        <p>:</p>
                        <p id="minutos" className="minutos">{am[0]}</p>
                        <p id="ampm" className="ampm">{am[1]}</p>
                    </div>
                </div>
            }

        </div>
    )
}
