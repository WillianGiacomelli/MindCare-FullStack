import axios, { type InternalAxiosRequestConfig } from 'axios';

const scheduleApi = axios.create({
    baseURL: 'http://localhost:5108/api',
});

scheduleApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('psi_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default scheduleApi;
