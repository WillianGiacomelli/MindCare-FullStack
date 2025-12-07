import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/public/home/Home';
import Login from '../pages/public/login/Login';
import RegisterPsychologist from '../pages/public/register/psychologist/RegisterPsychologist';
import PatientDashboard from '../pages/main/dashboard/patient/PatientDashboard';
import PsychologistDashboard from '../pages/main/dashboard/psychologist/PsychologistDashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // layout principal
    // children: [
    //   { index: true, element: <Home /> },
    //   { path: "about", element: <About /> },
    // ],
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
    element: <PatientDashboard />,
  },
  {
    path: "dashboard/psychologist",
    element: <PsychologistDashboard />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
