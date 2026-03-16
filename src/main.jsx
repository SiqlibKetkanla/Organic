import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import ProtectedRoute from './guard/ProtectedRoute.jsx';
import Service from './pages/Service.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><App /></ProtectedRoute>,
    children:[
      {
        path: "/",
        element:<Home />
      }
    ]
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/register",
    element:<Register />
  },
  {
    path: "/forgot-password",
    element:<ResetPassword />
  },
  {
    path: "/service",
    element:<Service />
  },
  {
    path: "/about",
    element:<About />
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

//d