const PATH_URL = "http://localhost:3000/api/calificacion/guia";

export const calisificacionGuia = async (token) => {
    try {
        const response = await fetch(PATH_URL,{
            method: 'GET',
            headers: {
                'Authorization':`Bearer ${token}`
            }
        });
        return await response.json();
    } catch (error) {
        return error
    }
}