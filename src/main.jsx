import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import News from './Component/News/News';
import NewsDetails from './Component/News/NewsDetails';
import Dashboard from './Component/Dashboard/Dashboard';
import DashboartdPages1 from './Component/Dashboard/DashboartdPages/DashboartdPages1';
import DashboartdPages2 from './Component/Dashboard/DashboartdPages/DashboartdPages2';
import DashboartdPages3 from './Component/Dashboard/DashboartdPages/DashboartdPages3';
import DashboartdPages4 from './Component/Dashboard/DashboartdPages/DashboartdPages4';
import DashboartdPages5 from './Component/Dashboard/DashboartdPages/DashboartdPages5';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader: () => fetch (`https://openapi.programming-hero.com/api/news/categories`),
    children: [
      {
        path: '/',
        loader: ()=> fetch(`https://openapi.programming-hero.com/api/news/category/08`),
        element: <News/>,
      },
      {
        path: '/news/:id',
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element: <News/>,
      },
      {
        path: '/newsDetails/:id',
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
        element: <NewsDetails/>
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
      {
        path: "/dashboard",
        element: <DashboartdPages1/>,
      },
      {
        path: "/dashboard/dashboard",
        element: <DashboartdPages1/>,
      },
      {
        path: "/dashboard/profile",
        element: <DashboartdPages2/>,
      },
      {
        path: "/dashboard/editProfile",
        element: <DashboartdPages3/>
      },
      {
        path: "/dashboard/about",
        element: <DashboartdPages4/>
      },
      {
        path: "/dashboard/contact",
        element: <DashboartdPages5/>
      },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
