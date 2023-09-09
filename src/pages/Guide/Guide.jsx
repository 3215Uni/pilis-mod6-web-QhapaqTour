import React from 'react'
import {useForm} from 'react-hook-form';
import './Guide.css';
import Cookies from 'js-cookie';
import { createOrUpdateGuide } from '../../services/guide';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const Guide = () => {
    const { register,handleSubmit,formState: {errors} } = useForm();
    const cookie = Cookies.get();
    const navigate = useNavigate();
    const onSubmit = async (datos) => {
        const response = await createOrUpdateGuide(datos,cookie.token);
        if (response.status == 500) {
            toast.error(response.message);
            return
        }
        toast.success('Datos actualizados correctamente!!!');
        navigate('/dashboard');
    }
  return (
    <main className='main-content'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grupo'>
            <label htmlFor="carnet">Carnet del vehiculo</label>
            <input type="text" id='carnet'
              {...register('carnet', { required: 'El campo carnet es requerido' })}
            />
            {errors && <p className='message-error'>{errors.carnet?.message}</p>}
          </div>
        <div className='grupo'>
            <label htmlFor="licencia">Licencia del vehiculo</label>
            <input type="text" id='licencia'
              {...register('licencia', { required: 'El campo licencia es requerido' })}
            />
            {errors && <p className='message-error'>{errors.licencia?.message}</p>}
          </div>
        <div className='grupo'>
            <label htmlFor="cedula">Cedula del vehiculo</label>
            <input type="text" id='cedula'
              {...register('cedula', { required: 'El campo cedula es requerido' })}
            />
            {errors && <p className='message-error'>{errors.cedula?.message}</p>}
          </div>
          <button type='submit' className='form-guia'>Confirmar cambios</button>
        </form>
  </main>
  )
}
