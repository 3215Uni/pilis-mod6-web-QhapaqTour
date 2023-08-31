const LOGIN_URL = 'http://localhost:3000/api/signin'

export const login = async (data) => {
  try {
    const response = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const result = await response.json()

    if (!response.ok) {
      throw result
    }

    return result
  } catch (error) {
    console.error(error)
    throw error
  }
}
