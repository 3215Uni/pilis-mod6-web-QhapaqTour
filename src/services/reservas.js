const PATH_API = 'http://localhost:3000/api/guia/reservas';

export const getReservasGuia = async (token) => {
    try {
        const response = await fetch(PATH_API,{
            method: 'GET',
            headers: {
                'Authorization':`Bearer ${token}`
            }
        });
        return await response.json();
    } catch (error) {
        return error;
    }
}