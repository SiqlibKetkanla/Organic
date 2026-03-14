import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx'
import Team from './pages/Team.jsx'
import Blog from './pages/Blog.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "singleBlog",
        element: <SingleBlog />,
      },
      {
        path: "/About",
        element:<About />
      },
      {
        path: "/Service",
        element: <Service />
      },
      {
        path: "/Team",
        element: <Team />
      },
      {
        path: "/Blog",
        element: <Blog />
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
