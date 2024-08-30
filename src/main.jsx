import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Signin from './component/Signin.jsx'
import Signup from './component/Signup.jsx'
import ContactList from './component/ContactList.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '',
        element: <Signin/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/list',
        element: <ContactList/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
