import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './Places.css'
import { uploadFile } from '../../firebase/config'
import { createLugar } from '../../services/place'

export const Places = () => {
  const [file, setFile] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    if (file === null) {
      console.log('No selecciono imagen')
      return
    }
    const response = await uploadFile(file)
    const datos = { ...data, url: response.metadata.fullPath }
    createLugar(datos)
  }

  return (
    <main className='main-content'>
      <div className="formulario">
        <h5 className='titulo-formulario'>Gestionar Lugares</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grupo'>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id='nombre'
                                {...register('nombre', { required: 'El campo nombre es requerido' })}
                            />
            {errors && <p className='message-error'>{errors.nombre?.message}</p>}
          </div>
          <div className='grupo'>
            <label htmlFor="latitud">Latitud</label>
            <input type="text" id='latitud'
                                {...register('latitud', { required: 'El campo latitud es requerido' })}
                            />
            {errors && <p className='message-error'>{errors.latitud?.message}</p>}
          </div>
          <div className='grupo'>
            <label htmlFor="longitud">Longitud</label>
            <input type="text" id='longitud'
                                {...register('longitud', { required: 'El campo longitud es requerido' })}
                            />
            {errors && <p className='message-error'>{errors.longitud?.message}</p>}
          </div>
          <div className='grupo'>
            <label htmlFor="localidad">Localidad</label>
            <input type="text" id='localidad'
                                {...register('localidad', { required: 'El campo localidad es requerido' })}
                            />
            {errors && <p className='message-error'>{errors.longitud?.message}</p>}
          </div>
          <div className='grupo'>
            <label htmlFor="regiones">Regiones</label>
            <select
                            {...register('regiones', { required: 'El campo regiones es requerido' })}
                            >
              <option value="PUNA">Puna</option>
              <option value="QUEBRADA">Quebrada</option>
              <option value="VALLE">Valle</option>
              <option value="YUNGA">Yunga</option>
            </select>
            {errors && <p className='message-error'>{errors.regiones?.message}</p>}
          </div>
          <div className='imagen'>
            <label>
              Selecciona una imagen
              <input type="file" onChange={e => setFile(e.target.files[0])} />
            </label>
            <span>{file ? file.name : 'Sin archivos seleccionados'}</span>
          </div>
          <button type='submit'>Crear</button>
        </form>
      </div>
    </main>
  )
}
