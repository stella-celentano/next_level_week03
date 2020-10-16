import axios from 'axios';

const api = axios.create({
    baseURL: 'http://27f6b8f09516.ngrok.io',
})

export default api;