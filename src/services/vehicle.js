const  VEHICLE_CREATE_UPDATE = 'http://localhost:3000/api/vehiculos';

export const createOrUpdateVehicles = async (data,token) => {
    try {
        const response = fetch(`${VEHICLE_CREATE_UPDATE}`,{
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