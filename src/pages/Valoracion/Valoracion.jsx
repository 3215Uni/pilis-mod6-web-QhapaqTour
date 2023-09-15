import React, { useEffect, useState } from 'react'
import './Valoracion.css';
import Cookies from 'js-cookie';
import { calisificacionGuia } from '../../services/calisificacion';
import { MdStarBorder,MdStarOutline,MdStar } from 'react-icons/md'
export const Valoracion = () => {
    const cookie = Cookies.get();
    const [calisificacion, setCalisificacion] = useState(null);
    useEffect(() => {
        const fetchCalisificacion = async () => {
            const response = await calisificacionGuia(cookie.token);
            setCalisificacion(response)
        }
        fetchCalisificacion();
    }, [])
    return (
        <main className='main-content'>
            <div className="contenedora">
            {

                calisificacion == null || calisificacion.length == 0 ?
                <h5>No tiene calificaciones</h5>
                :
                calisificacion.map((clas,index) => (
                    <div className="card" key={index}>
                        <div className="card-title">
                            <p className='card-title-titulo'>{clas.apellido} {clas.nombre}</p>
                            <p className='card-title-fecha'>{clas.fecha}</p>
                        </div>
                        <div className="card-content">
                            <p>"{clas.comentario}"</p>
                        </div>
                        <div className="card-footer">
                            <p>Lugar: {clas.lugar}</p>
                            <p className='valoracion'>{Array.from({ length: 5 }, (_, index) => {
                                if (index < clas.nota) {
                                    return <MdStar key={index} />
                                } else {
                                    return <MdStarBorder key={index} />
                                }

                            })
                        }</p>
                        </div>

                    </div>
                ))

            }
            </div>
        </main>
    )
}
