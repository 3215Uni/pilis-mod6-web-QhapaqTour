const LOGIN_URL = 'http://localhost:3000/api/signin'
const REGISTER_URL = 'http://localhost:3000/api/signup'

export const login = async (data) => {
  try {
    const response = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    return error;
  }
}

export const registerGuia = async (datos) => {
  try {
    const response = await fetch(`${REGISTER_URL}`,{
      method: 'POST',
      headers: {
        'Content-type':'Application/json'
      },
      body: JSON.stringify(datos)
    });
    return response.json();
  } catch (error) {
    return error;
  }
}
