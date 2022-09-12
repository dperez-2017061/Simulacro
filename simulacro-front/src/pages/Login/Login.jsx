import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { url } from '../../GlobalUrl'
import './Login.css'
export const Login = ({setToken}) => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        usuario: '',
        contraseña: ''
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
        axios.post(url + 'encargado/login', data)
            .then(res => {
                Swal.fire({
                    title: res.data.message,
                    icon: 'success',
                    position: 'center',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                })
                localStorage.setItem('token', JSON.stringify(res.data.token))
                setToken(res.data.token)
                navigate('/reporte', {replace: true})
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
        <div className='body'>
            <div className="form-panel two">
                <div className="form-header">
                    <h1>Iniciar sesión</h1>
                </div>
                <div className="form-content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Usuario</label>
                            <input onChange={handleChange} type="text" id="usuario" name="username" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input onChange={handleChange} type="password" id="contraseña" name="password" required />
                        </div>
                        <div className="form-group">
                            <button type="submit">Iniciar Sesión</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
