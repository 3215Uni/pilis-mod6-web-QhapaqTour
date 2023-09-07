import { useForm } from 'react-hook-form'
import Destino from '../../assets/destino.png'
import Bidon from '../../assets/bidon.png'
import './Profile.css'

export const Profile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <main className='main-content'>
      <div className="formulario">
        <h5 className='titulo-formulario'>Gestionar cuenta</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grupo'>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id='nombre'
                                {...register('nombre', { required: 'El campo nombre es requerido' })}
                            />
            {errors && <p className='message-error'>{errors.nombre?.message}</p>}
          </div>
          <div className='grupo'>
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id='apellido'
                                {...register('apellido', { required: 'El campo apellido es requerido' })}
                            />
            {errors && <p className='message-error'>{errors.apellido?.message}</p>}
          </div>
          <div className='grupo'>
            <label htmlFor="email">Email</label>
            <input type="text" id='email'
                                {...register('email', { required: 'El campo email es requerido' })}
                            />
            {errors && <p className='message-error'>{errors.email?.message}</p>}
          </div>
          <div className='grupo'>
            <label htmlFor="telefono">Telefono</label>
            <input type="text" id='telefono'
                                {...register('telefono', { required: 'El campo telefono es requerido' })}
                            />
            {errors && <p className='message-error'>{errors.telefono?.message}</p>}
          </div>
          <div className='grupo'>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id='password'
                                {...register('password', { required: 'El campo contraseña es requerido' })}
                            />
            {errors && <p className='message-error'>{errors.password?.message}</p>}
          </div>
          <div className='grupo'>
            <label htmlFor="usuario">Nombre de usuario</label>
            <input type="text" id='usuario'
                                {...register('usuario', { required: 'El campo usuario es requerido' })}
                            />
            {errors && <p className='message-error'>{errors.usuario?.message}</p>}
          </div>
          <button type='submit'>Confirmar cambios</button>
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
  )
}
