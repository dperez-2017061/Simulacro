import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Fecha } from '../../pages/Fecha/Fecha';
import { Inscripcion } from '../../pages/Inscripcion/Inscripcion';
import { Login } from '../../pages/Login/Login';
import { Reporte } from '../../pages/Reporte/Reporte';
import { Navbar } from '../Navbar/Navbar'

export const Main = () => {
    const localToken = localStorage.getItem('token')
    const [token, setToken] = useState((localToken === null || localToken === undefined) ? '' : JSON.parse(localToken))

    return (
        <>
            <Navbar token={token} setToken={setToken}>
                <Routes>
                    <Route path='inscripcion' element={
                        !token ?
                            <Inscripcion />
                            :
                            <Navigate to="/reporte" />
                    } />
                    <Route path='fechaDeclamacion/:idA' element={<Fecha />} />
                    <Route path='login' element={<Login setToken={setToken} />} />
                    <Route path='reporte' element={
                        token ?
                            <Reporte token={token} />
                            :
                            <Navigate to="/inscripcion" />
                    } />
                    <Route path='*' element={<Navigate to='/inscripcion' />} />
                </Routes>
            </Navbar>
        </>
    )
}
