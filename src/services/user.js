import { api } from './api'

const LOGIN_URL = `${api.server}/signin`
const REGISTER_URL = `${api.server}/signup`
const USER_UPDATE_URL = `${api.server}/usuarios`
const USER_GUIDE_URL = `${api.server}/usuarios/guia`

export const login = async (data) => {
  try {
    const response = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return await response.json()
  } catch (error) {
    return error
  }
}

export const registerGuia = async (datos) => {
  try {
    const response = await fetch(`${REGISTER_URL}`, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(datos)
    })
    return response.json()
  } catch (error) {
    return error
  }
}

export const updateUser = async (userId, datos, token) => {
  try {
    const response = await fetch(`${USER_UPDATE_URL}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(datos)
    })
    return response
  } catch (error) {
    return error
  }
}

export const userGuideVehicle = async (token) => {
  try {
    const response = await fetch(`${USER_GUIDE_URL}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    return response.json()
  } catch (error) {
    return error
  }
}
