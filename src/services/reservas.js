const PATH_API = 'http://localhost:3000/api/guia/reservas';
const PATH_DELETE = 'http://localhost:3000/api/reservas';

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

export const deleteReservasGuia = async (id) => {
    try {
        const response = fetch(`${PATH_DELETE}/${id}`,{
            method: 'DELETE'
        });
        return await response;
    } catch (error) {
        return error;
    }
}