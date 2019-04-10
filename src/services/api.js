import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-nodejs.herokuapp.com',
});

export default api;