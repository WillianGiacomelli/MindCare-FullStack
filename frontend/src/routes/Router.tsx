import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';

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
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
