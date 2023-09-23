import { api } from './api'

const PATH_URL = `${api.server}/calificacion/guia`

export const calisificacionGuia = async (token) => {
  try {
    const response = await fetch(PATH_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return await response.json()
  } catch (error) {
    return error
  }
}
