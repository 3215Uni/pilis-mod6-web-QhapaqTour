import React, { useEffect, useState } from 'react'
import { BsFillPersonVcardFill, BsCashCoin } from 'react-icons/bs'
import { MdPlace, MdFamilyRestroom } from 'react-icons/md'
import { TfiMapAlt, TfiMoney } from 'react-icons/tfi'
import { LuCalendarCheck } from 'react-icons/lu'
import './Reservas.css';
import Cookies from 'js-cookie'
import { getReservasGuia } from '../../services/reservas'

export const Reservas = () => {
    const cookie = Cookies.get();
    const [reservas, setReservas] = useState(null)
    useEffect(() => {
        const fetchReservas = async () => {
            const response = await getReservasGuia(cookie.token);
            setReservas(response);
        }
        fetchReservas()
    },[])
    return (
        <main className='main-content'>
            <div className="contenedora">
            {
                reservas == null || reservas.length == 0 ?
                <h5>No tiene reservas pendientes</h5>
                :
                reservas.map((reserva,index) => (
                <div className='card-reservas' key={index}>
                    <div className="card-reservas-header">
                        <h5>Información del cliente</h5>
                        <div>
                            <BsFillPersonVcardFill />
                            <p>{reserva.apellido} {reserva.nombre}</p>
                        </div>
                    </div>
                    <div className="card-reservas-content">
                        <h5>Información del recorrido</h5>
                        <div className='card-info'>
                        <div>
                            <MdPlace />
                            <p>{reserva.lugar}</p>
                        </div>
                        <div>
                            <TfiMapAlt />
                            <p>{reserva.region}</p>
                        </div>
                        <div>
                            <TfiMoney />
                            <p>{reserva.precio}</p>
                        </div>
                        <div>
                            <MdFamilyRestroom />
                            <p>{reserva.cantidad} personas</p>
                        </div>
                        <div>
                            <BsCashCoin />
                            <p>{reserva.pago}</p>
                        </div>
                        <div>
                            <LuCalendarCheck />
                            <p className='fecha-recorrido'>{reserva.fecha}</p>
                        </div>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
        </main>
    )
}
