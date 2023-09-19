import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { userGuideVehicle } from '../../services/user'
import { onMessageListener, requestPermission } from '../../firebase/config'

export const Dashboard = () => {
  const cookie = Cookies.get()
  const [users, setUsers] = useState(null)

  useEffect(() => {
    requestPermission()

    const unsubscribe = onMessageListener().then(payload => {
      console.log(payload)

      toast.success(`${payload?.notification?.title} ${payload?.notification?.body}`)
    })

    const fetchUser = async () => {
      const response = await userGuideVehicle(cookie.token)
      setUsers(response)
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
        <p>Nombre: {users?.nombre}</p>
        <p>Apellido: {users?.apellido}</p>
        <p>Email: {users?.email}</p>
        <p>D.N.I.: {users?.dni}</p>
      </div>
      <div className="datos-personales">
        <h2>Datos del guia</h2>
        {
          users?.guia == null
            ? <h5>No tiene datos</h5>
            : <>
              <p>Carnet: {users?.guia.carnet}</p>
              <p>Cedula: {users?.guia.cedula}</p>
              <p>Licencia: {users?.guia.licencia}</p>
            </>
        }
      </div>
      <div className="datos-personales">
        <h2>Vehiculos</h2>
        {
          users?.vehiculos.length === 0
            ? <h5>No tiene vehiculos</h5>
            : users?.vehiculos.map((vehiculo) => (
              <li key={vehiculo.id}>
                Asientos: {vehiculo.asientos}, Tipo: {vehiculo.tipo}
              </li>
            ))
        }
      </div>
    </main>
  )
}
