import toast from 'react-hot-toast'
import './Register.css'
import { useForm } from 'react-hook-form'
import { registerGuia } from '../../services/user'
import { Link, useNavigate } from 'react-router-dom'

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const response = await registerGuia({ ...data, rol: 'GUIA' })
    if (response.message) {
      toast.error(response.message)
    } else {
      toast.success('Usuario registrado correctamente!!!')
      navigate('/login')
    }
  }
  return (
    <main className='registrarme'>
      <h2 className='titulo'>QhapaqTour</h2>
      <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
        <p className='titulo-formulario'>Registrarse</p>
        <div className='registro'>
          <input type="text" id='nombre' className='registro-input' placeholder='Nombre'
            {...register('nombre', { required: 'El campo nombre es requerido' })}
          />
          {errors && <p className='error-mensaje'>{errors.nombre?.message}</p>}
        </div>
        <div className='registro'>
          <input type="text" id='apellido' className='registro-input' placeholder='Apellido'
            {...register('apellido', { required: 'El campo apellido es requerido' })}
          />
          {errors && <p className='error-mensaje'>{errors.apellido?.message}</p>}
        </div>
        <div className='registro'>
          <input type="text" id='email' className='registro-input' placeholder='Tu email'
            {...register('email', { required: 'El campo es requerido', pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Ingresar un correo electronico valido' } })}
          />
          {errors && <p className='error-mensaje'>{errors.email?.message}</p>}
        </div>
        <div className='registro'>
          <input type="text" id='dni' className='registro-input' placeholder='Número de documento'
            {...register('dni', { required: 'El campo dni es requerido' })}
          />
          {errors && <p className='error-mensaje'>{errors.dni?.message}</p>}
        </div>
        <div className='registro'>
          <input type="password" id='password' className='registro-input' placeholder='Tu contraseña'
            {...register('password', { required: 'El campo es requerido', minLength: { value: 6, message: 'Ingresar como minimo 6 caracteres' } })}
          />
          {errors && <p className='error-mensaje'>{errors.password?.message}</p>}
        </div>
        <div className='registro'>
          <input type="text" id='username' className='registro-input' placeholder='Tu nombre de usuario'
            {...register('username', { required: 'El campo usuario es requerido' })}
          />
          {errors && <p className='error-mensaje'>{errors.username?.message}</p>}
        </div>
        <div className="registro">
          <button type='submit'>Registrarme</button>
        </div>
      </form>
      <Link to='/login' className='texto-naranja'>Ya tengo una cuenta</Link>
    </main>
  )
}
