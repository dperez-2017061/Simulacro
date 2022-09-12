import React from 'react'
import './Info.css'

export const Info = ({ alumno, index }) => {
    return (
        <>
            {
                index != 0 && <hr style={{ background: 'black' }} />
            }
            <p className='text-center' style={{ fontSize: '29px' }}>{alumno.nombreCompleto}</p>
            <div id="div-clima" className="container-fluid">
                <div id="seccion-fecha" className="contenedor">
                    <div id="div-fecha" className="row encabezado-secundario color-encabezado border-contenedor-sup vertical-center">
                        <p id="p-fecha" className="text-center">
                            Carnet
                        </p>
                    </div>
                    <div id="div-hora" className="row cuerpo-secundario color-cuerpo border-contenedor-inf vertical-center">
                        <p id="p-hora" className="text-center">
                            {alumno.carnet}
                        </p>
                    </div>
                </div>
                <div id="seccion-fecha" className="contenedor">
                    <div id="div-fecha" className="row encabezado-secundario color-encabezado border-contenedor-sup vertical-center">
                        <p id="p-fecha" className="text-center">
                            Género
                        </p>
                    </div>
                    <div id="div-hora" className="row cuerpo-secundario color-cuerpo border-contenedor-inf vertical-center">
                        <p id="p-hora" className="text-center">
                            {alumno.género}
                        </p>
                    </div>
                </div>
                <div id="seccion-fecha" className="contenedor">
                    <div id="div-fecha" className="row encabezado-secundario color-encabezado border-contenedor-sup vertical-center">
                        <p id="p-fecha" className="text-center">
                            Edad
                        </p>
                    </div>
                    <div id="div-hora" className="row cuerpo-secundario color-cuerpo border-contenedor-inf vertical-center">
                        <p id="p-hora" className="text-center">
                            {alumno.edad}
                        </p>
                    </div>
                </div>
                <div id="seccion-fecha" className="contenedor">
                    <div id="div-fecha" className="row encabezado-secundario color-encabezado border-contenedor-sup vertical-center">
                        <p id="p-fecha" className="text-center">
                            Carrera
                        </p>
                    </div>
                    <div id="div-hora" className="row cuerpo-secundario color-cuerpo border-contenedor-inf vertical-center">
                        <p id="p-hora" className="text-center">
                            {alumno.carrera}
                        </p>
                    </div>
                </div>
                <div id="seccion-fecha" className="contenedor">
                    <div id="div-fecha" className="row encabezado-secundario color-encabezado border-contenedor-sup vertical-center">
                        <p id="p-fecha" className="text-center">
                            Género de Poesía
                        </p>
                    </div>
                    <div id="div-hora" className="row cuerpo-secundario color-cuerpo border-contenedor-inf vertical-center">
                        <p id="p-hora" className="text-center">
                            {alumno.géneroPoesía}
                        </p>
                    </div>
                </div>
                <div id="seccion-fecha" className="contenedor">
                    <div id="div-fecha" className="row encabezado-secundario color-encabezado border-contenedor-sup vertical-center">
                        <p id="p-fecha" className="text-center">
                            Fecha de Declamación
                        </p>
                    </div>
                    <div id="div-hora" className="row cuerpo-secundario color-cuerpo border-contenedor-inf vertical-center">
                        <p id="p-hora" className="text-center">
                            {alumno.fechaDeclamación}
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}
