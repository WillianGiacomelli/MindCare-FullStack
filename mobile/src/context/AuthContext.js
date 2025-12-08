import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authApi } from '../services/apiConfig';
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSplashLoading, setIsSplashLoading] = useState(true);

    const checkLoggedIn = async () => {
        try {
            const token = await AsyncStorage.getItem('psi_token');
            const userData = await AsyncStorage.getItem('psi_user');

            if (token && userData) {
                setUser(JSON.parse(userData));
            }
        } catch (e) {
            console.log(`Check logged in error: ${e}`);
        } finally {
            setIsSplashLoading(false);
        }
    };

    useEffect(() => {
        checkLoggedIn();
    }, []);

    const login = async (email, password) => {
        setIsLoading(true);
        try {
            console.log('[AuthContext] Tentando logar com:', email);
            const response = await authApi.post('/auth/login', {
                email,
                senha: password
            });
            console.log('[AuthContext] Resposta do login:', response.status);

            const data = response.data;
            const token = data.token || data.Token; // Handle both cases
            await AsyncStorage.setItem('psi_token', token);

            const payload = jwtDecode(token);
            const userObj = {
                id: payload.nameid || payload.unique_name || payload.sub,
                name: payload.given_name || payload.unique_name,
                role: payload.role,
                email: payload.email
            };

            setUser(userObj);
            await AsyncStorage.setItem('psi_user', JSON.stringify(userObj));

        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        setIsLoading(true);
        try {
            await AsyncStorage.removeItem('psi_token');
            await AsyncStorage.removeItem('psi_user');
            setUser(null);
        } catch (e) {
            console.log(`Logout error: ${e}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                user,
                isSplashLoading,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
