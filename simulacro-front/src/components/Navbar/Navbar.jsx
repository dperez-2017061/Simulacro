import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Navbar.css'

export const Navbar = ({ children, token, setToken }) => {

    const handleClick = () => {
        localStorage.clear()
        setToken()
        Swal.fire({
            title: 'Sesión cerrada satisfactoriamente',
            icon: 'success',
            position: 'center',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        })
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm" style={{ padding: 0 }}>
                <Link to="/inscripcion" className='me-4'>
                    <img src={require('../../shared/img/logo.jpg')} alt="Logo" width="112" height="28" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        {
                            !token ?
                                <>
                                    <li className="nav-item hover">
                                        <Link className="nav-link active" to="/inscripcion"><img src={require('../../shared/img/inscripcion.png')} alt="formulario" style={{ height: '35px' }} /> Inscripcion</Link>
                                    </li>
                                    <li className="nav-item hover">
                                        <Link className="nav-link active" to="/login"><img src={require('../../shared/img/login.png')} alt="formulario" style={{ height: '35px' }} /> Iniciar Sesión</Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item hover">
                                        <Link className="nav-link active" to="/reporte"><img src={require('../../shared/img/reporte.png')} alt="formulario" style={{ height: '35px' }} /> Reporte</Link>
                                    </li>
                                    <li className="nav-item hover" onClick={handleClick}>
                                        <Link className="nav-link active" to="/reporte"><img src={require('../../shared/img/salir.jpg')} alt="formulario" style={{ height: '35px' }} /> Cerrar Sesión</Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>

            </nav>
            {children}
        </>
    )
}
