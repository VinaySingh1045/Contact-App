import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Signin from './component/Signin.jsx'
import Signup from './component/Signup.jsx'
import ContactList from './component/ContactList.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import AddContact from './component/AddContact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Signin />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/list',
        element: <ContactList />
      },
      {
        path: '/addlist',
        element: <AddContact />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
