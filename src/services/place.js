const PATH_URL = 'http://localhost:3000/api/lugares';

export const createLugar = async (data) => {
    try {
        const response = await fetch(PATH_URL,{
            method: "POST",
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });
        return response
    } catch (error) {
        return error
    }
}

export const getLugares = async () => {
    try {
        const response = await fetch(`${PATH_URL}`,{
            method: 'GET'
        });
        return await response.json();
    } catch (error) {
        return error;
    }
}