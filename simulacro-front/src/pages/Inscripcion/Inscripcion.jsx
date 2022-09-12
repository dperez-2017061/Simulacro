import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { url } from '../../GlobalUrl'
import './Inscripcion.css'
export const Inscripcion = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        carnet: '',
        nombreCompleto: '',
        género: '',
        teléfono: 0,
        fechaDeNacimiento: '',
        carrera: '',
        géneroPoesía: '',
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setData({
            ...data,
            [id]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(url + 'alumno/inscribirse', data)
            .then(res => {
                Swal.fire({
                    title: res.data.message,
                    icon: 'success',
                    position: 'center',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                })
                navigate('/fechaDeclamacion/' + res.data.alumno._id)
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
    }

    return (
        <div className='body1'>
            <div className="form-panel2 one">
                <div className="form-header">
                    <h1>Formulario de inscripción</h1>
                </div>
                <div className="form-content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="carnet">Carnet</label>
                            <input onChange={handleChange} type="text" id="carnet" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nombreCompleto">Nombre Completo</label>
                            <input onChange={handleChange} type="text" id="nombreCompleto" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dirección">Dirección</label>
                            <input onChange={handleChange} type="text" id="dirección" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="carnet">Género</label>
                            <select value={data.género} onChange={handleChange} id="género" className="form-select" aria-label="Default select example" required>
                                <option value="" disabled>Elíja su género</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="teléfono">Teléfono</label>
                            <input onChange={handleChange} type="number" id="teléfono" required="required" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fechaDeNacimiento">Fecha De Nacimiento</label>
                            <input onChange={handleChange} type="date" id="fechaDeNacimiento" required="required" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="carrera">Carrera</label>
                            <input onChange={handleChange} type="text" id="carrera" required="required" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="géneroPoesía">Género De Poesía</label>
                            <select value={data.géneroPoesía} onChange={handleChange} id="géneroPoesía" className="form-select" aria-label="Default select example" required>
                                <option value="" disabled>Elíja el género de poesía</option>
                                <option value="Lírica">Lírica</option>
                                <option value="Épica">Épica</option>
                                <option value="Dramática">Dramática</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit">Inscribirse</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
