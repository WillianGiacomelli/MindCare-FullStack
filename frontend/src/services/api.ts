import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_NOTES_API_URL || 'http://localhost:5107/api',
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('psi_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
