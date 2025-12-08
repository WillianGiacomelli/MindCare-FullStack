import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// Use o IP da sua máquina se estiver usando um dispositivo físico!
// Para Android Emulator padrão: 10.0.2.2
// Para iOS Simulator: localhost
const DEV_MACHINE_IP = '10.0.2.2'; // <--- ALTERE AQUI SE NECESSÁRIO (ex: '192.168.1.15')

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

// Configuração das instâncias Axios para cada microserviço
const authApi = axios.create({
    baseURL: getBaseUrl(5107), // Auth Service
});

const scheduleApi = axios.create({
    baseURL: getBaseUrl(5108), // Scheduling Service (ajustado para porta correta se necessário)
});

const notesApi = axios.create({
    baseURL: getBaseUrl(5109), // Notes Service
});

// Função para adicionar interceptor de token
const addTokenInterceptor = (apiInstance) => {
    apiInstance.interceptors.request.use(async (config) => {
        const token = await AsyncStorage.getItem('psi_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
};

// Aplicar interceptors
addTokenInterceptor(authApi);
addTokenInterceptor(scheduleApi);
addTokenInterceptor(notesApi);

export { authApi, scheduleApi, notesApi };
