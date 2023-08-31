import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './Login.css'
import { login } from '../../services/user'
import { UserContext } from '../../context/UserContext'

export const Login = () => {
  const { setCurrentUser } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const onSubmit = (data, e) => {
    e.preventDefault()
    login(data)
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.token))
        setCurrentUser(response.token)
        navigate('/dashboard')
      })
      .catch((error) => setError(error))
  }

  return (
    <main className='container'>
      <div className='title'>
        <h1>QhapaqTour</h1>

        <svg className='shape' viewBox="0 0 383 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M383 1024L347 995.558C311 967.114 239 910.225 210 853.336C181 796.447 196 739.558 225 682.669C253 625.78 297 568.891 318 512.002C340 455.114 345 398.891 345 342.002C345 285.114 340 227.558 275 170.669C210 113.78 82 160.502 16.5 67.0024L8 51.0024L3 33.5024L0 16.5015L0 0H383V28.4444C383 56.8888 383 113.778 383 170.667C383 227.556 383 284.444 383 341.333C383 398.222 383 455.111 383 512C383 568.889 383 625.778 383 682.667C383 739.556 383 796.444 383 853.333C383 910.222 383 995.556 383 1024V1024Z" fill="white"/>
        </svg>
      </div>

      <div className='right'>
        <div className='form-container'>
          <h2>Ingresa a tu cuenta</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <label className="form-label">
              Tu email o nombre de usuario
              <input
              type="text"
              className='form-control'
              placeholder="Email o nombre de usuario"
              {...register('email', { required: 'Ingresa tu email o nombre de usuario' })} />
            </label>
            {errors && <p className='label-error'>{errors.email?.message}</p>}

            <label className="form-label">
              Tu contraseña
              <input
              type="password"
              className='form-control'
              placeholder="Contraseña" {...register('password', { required: 'Ingresa tu contraseña' })} />
            </label>
            {errors && <p className='label-error'>{errors.password?.message}</p>}
            {error && <p className='login-error'>{error.message}</p>}
            <button type='submit'>Ingresar</button>
          </form>
          <p className='create-account'>¿No tienes cuenta? <Link to='/register'>Registrate</Link></p>
        </div>
      </div>
    </main>
  )
}
