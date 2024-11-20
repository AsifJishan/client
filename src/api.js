import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/properties' });

export const fetchProperties = () => API.get('/');
export const fetchProperty = (id) => API.get(`/${id}`);
export const addProperty = (property) => API.post('/', property);
export const updateProperty = (id, property) => API.put(`/${id}`, property);
export const deleteProperty = (id) => API.delete(`/${id}`);
