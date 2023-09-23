import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { userGuideVehicle } from '../../services/user'
import { onMessageListener, requestPermission } from '../../firebase/config'
import { UserContext } from '../../context/UserContext'

export const Dashboard = () => {
  const cookie = Cookies.get()
  const { currentUser } = useContext(UserContext)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const data = { user: currentUser, token: cookie.token }
    requestPermission(data)

    const unsubscribe = onMessageListener().then(payload => {
      console.log(payload)

      toast.success(`${payload?.notification?.title} ${payload?.notification?.body}`)
    })

    const fetchUser = async () => {
      const response = await userGuideVehicle(cookie.token)
      setUser(response)
    }
    fetchUser()

    return () => {
      unsubscribe.catch(err => console.log('failed: ', err))
    }
  }, [])

  return (
    <main className="main-content">
      <div className="datos-personales">
        <h2>Datos Personales</h2>
        <p>Nombre: {user?.nombre}</p>
        <p>Apellido: {user?.apellido}</p>
        <p>Email: {user?.email}</p>
        <p>D.N.I.: {user?.dni}</p>
      </div>
      <div className="datos-personales">
        <h2>Datos del guia</h2>
        {
          user?.guia == null
            ? <h5>No tiene datos</h5>
            : <>
              <p>Carnet: {user?.guia.carnet}</p>
              <p>Cedula: {user?.guia.cedula}</p>
              <p>Licencia: {user?.guia.licencia}</p>
            </>
        }
      </div>
      <div className="datos-personales">
        <h2>Vehiculos</h2>
        {
          user?.vehiculos.length === 0
            ? <h5>No tiene vehiculos</h5>
            : user?.vehiculos.map((vehiculo) => (
              <li key={vehiculo.id}>
                Asientos: {vehiculo.asientos}, Tipo: {vehiculo.tipo}
              </li>
            ))
        }
      </div>
    </main>
  )
}
