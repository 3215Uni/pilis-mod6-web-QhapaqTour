const PATH_RECORRIDO = 'http://localhost:3000/api/recorridos';

export const createRecorrido = async (data,token) => {
    try {
        const response = await fetch(PATH_RECORRIDO,{
            method: 'POST',
            headers: {
                'Content-type':'application/json',
                'Authorization':`Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        return response;
    } catch (error) {
        return error
    }
}