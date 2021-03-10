import api from './api-config';

export const getAllDrivers = async () => {
    const resp = await api.get('/drivers');
    return resp.data;
}

export const getOneDriver = async (id) =>{
    const resp = await api.get(`/drivers/${id} `)
    return resp.data
}