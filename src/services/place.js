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
        const dato = await response.json();
        console.log(dato);
    } catch (error) {
        console.log(error)
    }
}