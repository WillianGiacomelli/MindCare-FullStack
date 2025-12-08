import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Note que a importação mudou nas versões novas
import api from '../services/authService';

interface User {
  id: string;
  email: string;
  name?: string;
  role: string;
}

interface AuthContextType {
  authenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  user: null,
  login: async () => ({ success: false }),
  logout: () => { },
  loading: true
});

interface AuthProviderProps {
  children: React.ReactNode;
}

interface DecodedToken {
  email: string;
  nameid: string; // ID do usuário
  unique_name: string;
  TipoUsuario: string;
  [key: string]: any;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredToken = localStorage.getItem('psi_token');

    if (recoveredToken) {
      try {
        const decoded = jwtDecode<DecodedToken>(recoveredToken);
        setUser({
          id: decoded.nameid,
          email: decoded.email,
          name: decoded.unique_name,
          role: decoded.TipoUsuario,
        });
      } catch (error) {
        localStorage.removeItem('psi_token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { email, senha: password });

      const { token, user: userData } = response.data;

      localStorage.setItem('psi_token', token);

      setUser({
        id: userData.id,
        email: userData.email,
        name: userData.nomeCompleto,
        role: userData.tipoUsuario
      });

      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.response?.data || "Erro ao logar" };
    }
  };

  const logout = () => {
    localStorage.removeItem('psi_token');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};