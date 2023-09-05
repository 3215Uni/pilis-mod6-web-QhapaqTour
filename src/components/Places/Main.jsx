import React, { useState } from 'react'
import "./main.css";
import { GrSettingsOption } from 'react-icons/gr';
import Message from '../../assets/message.png';
import { FaMoneyBill } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoMdInformationCircle } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { uploadFile } from '../../firebase/config';
import { createLugar } from '../../services/place';

export const Main = () => {
    const [file, setFile] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        if (file === null) {
            console.log("No selecciono imagen");
            return
        }
        const response = await uploadFile(file);
        const datos = {...data,url:response.metadata.fullPath}
        createLugar(datos)
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
                    <h5 className='titulo-formulario'>Gestionar Lugares</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grupo'>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id='nombre'
                                {...register("nombre", { required: "El campo nombre es requerido" })}
                            />
                            {errors && <p className='message-error'>{errors.nombre?.message}</p>}
                        </div>
                        <div className='grupo'>
                            <label htmlFor="latitud">Latitud</label>
                            <input type="text" id='latitud'
                                {...register("latitud", { required: "El campo latitud es requerido" })}
                            />
                            {errors && <p className='message-error'>{errors.latitud?.message}</p>}
                        </div>
                        <div className='grupo'>
                            <label htmlFor="longitud">Longitud</label>
                            <input type="text" id='longitud'
                                {...register("longitud", { required: "El campo longitud es requerido" })}
                            />
                            {errors && <p className='message-error'>{errors.longitud?.message}</p>}
                        </div>
                        <div className='grupo'>
                            <label htmlFor="localidad">Localidad</label>
                            <input type="text" id='localidad'
                                {...register("localidad", { required: "El campo localidad es requerido" })}
                            />
                            {errors && <p className='message-error'>{errors.longitud?.message}</p>}
                        </div>
                        <div className='grupo'>
                            <label htmlFor="regiones">Regiones</label>
                            <select
                            {...register("regiones", { required: "El campo regiones es requerido" })}
                            >
                                <option value="PUNA">Puna</option>
                                <option value="QUEBRADA">Quebrada</option>
                                <option value="VALLE">Valle</option>
                                <option value="YUNGA">Yunga</option>
                            </select>
                            {errors && <p className='message-error'>{errors.regiones?.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="imagen">Imagen</label>
                            <input type="file" id='imagen' onChange={e => setFile(e.target.files[0])} />
                        </div>
                        <button type='submit'>Crear</button>
                    </form>
                </div>
            </main>
        </>
    )
}
