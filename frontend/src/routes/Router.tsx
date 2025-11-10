import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // layout principal
    // children: [
    //   { index: true, element: <Home /> },
    //   { path: "about", element: <About /> },
    // ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
