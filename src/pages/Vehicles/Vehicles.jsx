import Cookies from 'js-cookie';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Vehicles.css';
import { createOrUpdateVehicles } from '../../services/vehicle';
import toast from 'react-hot-toast';

export const Vehicles = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const cookie = Cookies.get();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const response = await createOrUpdateVehicles(data,cookie.token);
        if (response.status == 201) {
            toast.success('Vehiculos agregado!!!');
            navigate('/dashboard')
            return
        }
        toast.error(response.message);
    }
    return (
        <main className='main-content'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grupo'>
                    <label htmlFor="asientos">Indique la cantidad de asientos</label>
                    <input type="text" id='asientos'
                        {...register('asientos', { required: 'El campo asientos es requerido' })}
                    />
                    {errors && <p className='message-error'>{errors.asientos?.message}</p>}
                </div>
                <div className='grupo'>
                    <label htmlFor="tipo">Tipo de vehiculo</label>
                    <select
                        {...register('tipo', { required: 'El campo tipo de vehiculo es requerido' })}
                    >
                        <option value="MOTO">Moto</option>
                        <option value="AUTO">Auto</option>
                        <option value="CAMIONETA">Camioneta</option>
                        <option value="COLECTIVO">Colectivo</option>
                        <option value="VAN">Van</option>
                        <option value="TRAFIC">Trafic</option>
                        <option value="MINIBUS">Minibus</option>
                    </select>
                    {errors && <p className='message-error'>{errors.tipo?.message}</p>}
                </div>
                <button type='submit' className='form-vehiculo'>Confirmar cambios</button>

            </form>
        </main>
    )
}
