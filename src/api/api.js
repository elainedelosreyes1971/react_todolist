import axios from 'axios';

const api = axios.create({
    baseURL: 'https://64ee17e31f87218271424d11.mockapi.io/api/v1/'
});

export default api;