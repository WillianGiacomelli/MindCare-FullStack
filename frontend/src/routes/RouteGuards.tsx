import React, { useContext, type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

interface PrivateRouteProps {
    children: JSX.Element;
    requiredRole?: string;
}

export const PrivateRoute = ({ children, requiredRole }: PrivateRouteProps) => {
    const { authenticated, loading, user } = useContext(AuthContext);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!authenticated) {
        return <Navigate to="/login" />;
    }

    if (requiredRole && user?.role !== requiredRole) {
        return <div className="p-5 text-center"><h1>Acesso negado</h1><p>Você não tem permissão para acessar esta página.</p></div>;
    }

    return children;
};

interface HomeRedirectProps {
    children: JSX.Element;
}

export const HomeRedirect = ({ children }: HomeRedirectProps) => {
    const { authenticated, user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!authenticated) {
        return children;
    }

    if (user?.role === 'Psicologo') {
        return <Navigate to="/dashboard/psychologist" />;
    }

    if (user?.role === 'Paciente') {
        return <Navigate to="/dashboard/patient" />;
    }

    return children;
};
