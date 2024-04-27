import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Layout from './mainLayout/Layout';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Error from './Pages/Error';
import AddCraftItem from './components/AddCraftItem';
import AllArt from './components/AllArt';
import CardDetails from './Pages/CardDetails';
import MyCard from './components/MyCard';
import UpdateItems from './components/UpdateItems';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/items')
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addCardItem',
        element: <PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
      },
      {
        path: '/allArt',
        element: <PrivateRoutes><AllArt></AllArt></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/items'),
      },
      {
        path: '/card/:id',
        element: <PrivateRoutes><CardDetails></CardDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)
      },
      {
        path: '/myCard',
        element: <PrivateRoutes><MyCard></MyCard></PrivateRoutes>
      },
      {
        path:'/updateItems/:id',
        element: <UpdateItems></UpdateItems>,
        loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`)
      }

    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
