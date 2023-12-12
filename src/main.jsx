import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './components/MainLayout/Mainlayout';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
  },
 
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
