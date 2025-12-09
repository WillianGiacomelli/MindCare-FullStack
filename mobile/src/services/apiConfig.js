import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';


const DEV_MACHINE_IP = '10.0.2.2';

const getBaseUrl = (port) => {
    let host;
    if (Platform.OS === 'android') {
        host = `http://${DEV_MACHINE_IP}`;
    } else {
        host = 'http://localhost';
    }
    const url = `${host}:${port}/api`;
    console.log(`[API Config] Base URL for port ${port}: ${url} (${Platform.OS})`);
    return url;
};


const authApi = axios.create({
    baseURL: getBaseUrl(5107),
});

const scheduleApi = axios.create({
    baseURL: getBaseUrl(5108),
});

const notesApi = axios.create({
    baseURL: getBaseUrl(5109),
});


const addTokenInterceptor = (apiInstance) => {
    apiInstance.interceptors.request.use(async (config) => {
        const token = await AsyncStorage.getItem('psi_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
};


addTokenInterceptor(authApi);
addTokenInterceptor(scheduleApi);
addTokenInterceptor(notesApi);

export { authApi, scheduleApi, notesApi };
