import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form';
import './Recorrido.css';
import { getLugares } from '../../services/place';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { createRecorrido } from '../../services/recorrido';
import toast from 'react-hot-toast';

export const Recorrido = () => {
    const { register,handleSubmit,formState: {errors} } = useForm();
    const [places, setPlaces] = useState(null);
    const cokies = Cookies.get();
    const navigation = useNavigate();
    useEffect(() => {
        const fetchPlaces = async () => {
           const resp = await getLugares();
           setPlaces(resp);
        };
        fetchPlaces();
    },[])
    const onSubmit = async (data) => {
        const resp = await createRecorrido(data,cokies.token);
        if (resp.status == 201) {
            toast.success('Recorrido creado correctamente');
            navigation("/dashboard");
            return
        }
        toast.error(resp.message)
    }
  return (
    <main className='main-content'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grupo'>
            <label htmlFor="precio">Precio del recorrido</label>
            <input type="text" id='precio'
              {...register('precio', { required: 'El campo precio es requerido' })}
            />
            {errors && <p className='message-error'>{errors.precio?.message}</p>}
          </div>
        <div className='grupo'>
            <label htmlFor="duracion">Duracion del recorrido</label>
            <input type="text" id='duracion'
              {...register('duracion', { required: 'El campo duracion es requerido' })}
            />
            {errors && <p className='message-error'>{errors.duracion?.message}</p>}
          </div>
        <div className='grupo'>
            <label htmlFor="cantidadPersonas">Cantidad de personas</label>
            <input type="text" id='cantidadPersonas'
              {...register('cantidadPersonas', { required: 'El campo cantidad es requerido' })}
            />
            {errors && <p className='message-error'>{errors.cantidadPersonas?.message}</p>}
          </div>
          <div className='grupo'>
            <label htmlFor="region">Regiones</label>
            <select
              {...register('region', { required: 'El campo region es requerido' })}
            >
                {
                    places?.map(lugar => (
                        <option key={lugar.id} value={lugar.id}>{lugar.nombre}</option>
                    ))
                }
            </select>
            {errors && <p className='message-error'>{errors.region?.message}</p>}
          </div>
          <button type='submit' className='button-recorrido'>Crear recorrido</button>
        </form>
    </main>
  )
}
