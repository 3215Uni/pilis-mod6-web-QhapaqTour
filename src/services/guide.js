import { api } from './api'

const GUIDE_CREATE_UPDATE = `${api.server}/guias`

export const createOrUpdateGuide = async (data, token) => {
  try {
    const response = fetch(`${GUIDE_CREATE_UPDATE}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
    return response
  } catch (error) {
    return error
  }
}
