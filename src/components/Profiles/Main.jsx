import React from 'react'
import "./main.css";
import { GrSettingsOption } from 'react-icons/gr';
import Message from '../../assets/message.png';
import Destino from '../../assets/destino.png';
import Bidon from '../../assets/bidon.png';
import { FaMoneyBill } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoMdInformationCircle } from 'react-icons/io';
import { useForm } from 'react-hook-form';

export const Main = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <div className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="1345" height="160" viewBox="0 0 1440 160" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 82.7289L60 50.4999C118 25.5 250 -16.5374 370 7.49998C490 31.5374 600 88.7382 720 112.776C840 136.813 960 88.7382 1080 82.7289C1200 76.7195 1320 112.776 1380 130.804L1440 148.832V160H1380C1320 160 1200 160 1080 160C960 160 840 160 720 160C600 160 480 160 360 160C240 160 120 160 60 160H0V82.7289Z" fill="white" />
                </svg>
            </div>
            <main>
                <div className="personales">
                    <h5 className='nombre'>Amir Sumari</h5>
                    <div className='lista'>
                        <GrSettingsOption />
                        <p>Configuración</p>
                    </div>
                    <div className='lista'>
                        <img src={Message} alt="message" style={{ "width": "1em", "height": "1em" }} />
                        <p>Mensaje</p>
                    </div>
                    <div className='lista'>
                        <FaMoneyBill />
                        <p>Ganar dinero conociendo</p>
                    </div>
                    <div className='lista'>
                        <BsFillPersonFill />
                        <p>Gestionar cuenta</p>
                    </div>
                    <div className='lista'>
                        <IoMdInformationCircle />
                        <p>Legal</p>
                    </div>
                </div>
                <div className="formulario">
                    <h5 className='titulo-formulario'>Gestionar cuenta</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grupo'>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id='nombre'
                                {...register("nombre", { required: "El campo nombre es requerido" })}
                            />
                            {errors && <p className='message-error'>{errors.nombre?.message}</p>}
                        </div>
                        <div className='grupo'>
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" id='apellido'
                                {...register("apellido", { required: "El campo apellido es requerido" })}
                            />
                            {errors && <p className='message-error'>{errors.apellido?.message}</p>}
                        </div>
                        <div className='grupo'>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email'
                                {...register("email", { required: "El campo email es requerido" })}
                            />
                            {errors && <p className='message-error'>{errors.email?.message}</p>}
                        </div>
                        <div className='grupo'>
                            <label htmlFor="telefono">Telefono</label>
                            <input type="text" id='telefono'
                                {...register("telefono", { required: "El campo telefono es requerido" })}
                            />
                            {errors && <p className='message-error'>{errors.telefono?.message}</p>}
                        </div>
                        <div className='grupo'>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id='password'
                                {...register("password", { required: "El campo contraseña es requerido" })}
                            />
                            {errors && <p className='message-error'>{errors.password?.message}</p>}
                        </div>
                        <div className='grupo'>
                            <label htmlFor="usuario">Nombre de usuario</label>
                            <input type="text" id='usuario'
                                {...register("usuario", { required: "El campo usuario es requerido" })}
                            />
                            {errors && <p className='message-error'>{errors.usuario?.message}</p>}
                        </div>
                        <button type='submit'>Registrarme</button>
                    </form>
                </div>
                <div className="iconos">
                    <div className='icono'>
                        <img src={Destino} alt="destino" />
                    </div>
                    <div className='icono'>
                        <img src={Bidon} alt="bidon" />
                    </div>
                </div>
            </main>
        </>
    )
}
