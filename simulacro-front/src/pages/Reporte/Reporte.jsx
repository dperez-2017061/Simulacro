import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { Info } from '../../components/Info/Info'
import { url } from '../../GlobalUrl'
import './Reporte.css'

export const Reporte = ({ token }) => {
  const [alumnos, setAlumnos] = useState([])

  useEffect(() => {
    axios.get(url + 'encargado/obtenerAlumnos', {
      headers: {
        Authorization: token
      }
    })
      .then(res => {
        setAlumnos(res.data.alumnos)
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
    <div className="fondo">
      {
        alumnos.map((alumno, index) =>
          <Info key={index} alumno={alumno} index={index} />
        )
      }
    </div>
  )
}
