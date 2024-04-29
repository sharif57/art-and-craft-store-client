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
import Subcategory from './Pages/Subcategory';
import SubDetails from './Pages/SubDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://art-and-craft-store-server-lyart.vercel.app/items')
        
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
        element: <AllArt></AllArt>,
        loader: () => fetch('https://art-and-craft-store-server-lyart.vercel.app/items'),
      },
      {
        path: '/card/:id',
        element: <PrivateRoutes><CardDetails></CardDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://art-and-craft-store-server-lyart.vercel.app/items/${params.id}`)
      },
      {
        path: '/myCard',
        element: <PrivateRoutes><MyCard></MyCard></PrivateRoutes>
      },
      {
        path: '/updateItems/:id',
        element: <UpdateItems></UpdateItems>,
        loader: ({ params }) => fetch(`https://art-and-craft-store-server-lyart.vercel.app/items/${params.id}`)
      },
      {
        path: '/sub',
        element: <Subcategory></Subcategory>,
        loader: () => fetch('https://art-and-craft-store-server-lyart.vercel.app/subcategory')
      },
      {
        path: '/subDetails/:id',
        element: <PrivateRoutes><SubDetails></SubDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://art-and-craft-store-server-lyart.vercel.app/subcategory/${params.id}`)
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
