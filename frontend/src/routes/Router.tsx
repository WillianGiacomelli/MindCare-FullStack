import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/public/home/Home';
import Login from '../pages/public/login/Login';
import RegisterPsychologist from '../pages/public/register/psychologist/RegisterPsychologist';
import PatientDashboard from '../pages/main/dashboard/patient/PatientDashboard';
import PsychologistDashboard from '../pages/main/dashboard/psychologist/PsychologistDashboard';

import { PrivateRoute, HomeRedirect } from './RouteGuards';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeRedirect>
        <Home />
      </HomeRedirect>
    ),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <div>Register Page</div>,
  },
  {
    path: "register-psychologist",
    element: <RegisterPsychologist />,
  },
  {
    path: "dashboard/patient",
    element: (
      <PrivateRoute requiredRole="Paciente">
        <PatientDashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "dashboard/psychologist",
    element: (
      <PrivateRoute requiredRole="Psicologo">
        <PsychologistDashboard />
      </PrivateRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
