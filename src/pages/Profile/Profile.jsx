import { useForm } from 'react-hook-form'
import Destino from '../../assets/destino.png'
import Bidon from '../../assets/bidon.png'
import './Profile.css'
import Cookies from 'js-cookie'
import { UserContext } from '../../context/UserContext'
import { useContext } from 'react'
import { updateUser } from '../../services/user'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const cookie = Cookies.get();
  const { currentUser } = useContext(UserContext)
  const navigation = useNavigate();
  const onSubmit = async (data) => {
    const response = await updateUser(currentUser.id,data,cookie.token);
    if (response.status != 204) {
      toast.error(response.message);
      return
    }
    toast.success('Usuario actualizado!!!')
    navigation('/dashboard')
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
            <label htmlFor="dni">Documento de identidad</label>
            <input type="text" id='dni'
              {...register('dni', { required: 'El campo dni es requerido' })}
            />
            {errors && <p className='message-error'>{errors.dni?.message}</p>}
          </div>
          <div className='grupo'>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id='password'
              {...register('password', { required: 'El campo contraseña es requerido' })}
            />
            {errors && <p className='message-error'>{errors.password?.message}</p>}
          </div>
          <div className='grupo'>
            <label htmlFor="username">Nombre de usuario</label>
            <input type="text" id='username'
              {...register('username', { required: 'El campo usuario es requerido' })}
            />
            {errors && <p className='message-error'>{errors.username?.message}</p>}
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
