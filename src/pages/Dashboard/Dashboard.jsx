import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { userGuideVehicle } from "../../services/user";

export const Dashboard = () => {
  const cookie = Cookies.get();
  const [users, setUsers] = useState(null)
  useEffect(() => {
    const fetchUser = async () => {
      const response = await userGuideVehicle(cookie.token);
      setUsers(response);
    }
    fetchUser()
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
        <p>Carnet: {users?.guia.carnet}</p>
        <p>Cedula: {users?.guia.cedula}</p>
        <p>Licencia: {users?.guia.licencia}</p>
      </div>
      <div className="datos-personales">
        <h2>Vehiculos</h2>
        {users?.vehiculos.map((vehiculo) => (
          <li key={vehiculo.id}>
            Asientos: {vehiculo.asientos}, Tipo: {vehiculo.tipo}
          </li>
        ))}
      </div>
    </main>
  )
}
