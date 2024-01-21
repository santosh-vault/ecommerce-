import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SingleProductPage from './Pages/Home/SingleProduct.jsx'
import Clothing from './Pages/Clothing.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/product/:id',
    element: <SingleProductPage />,
  },
  {
    path: '/clothing',
    element: <Clothing />,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
