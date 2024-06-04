import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import UserLogin from './Components/AuthorizationCompo/UserLogin.jsx';
import UserSignup from './Components/AuthorizationCompo/UserSignup.jsx';
import TruckEntry from './Components/TruckEntry.jsx/TruckEntry.jsx';
import DeliveryClient from './Components/DeliveryClient/DeliveryClient.jsx';
import FinalTruckChalan from './Components/FinalTruckChalan/FinalTruckChalan.jsx';
import Root from './Components/root/Root.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
     {
      path: "/",
      element: <UserLogin></UserLogin>
     },
     {
      path: "/signup",
      element: <UserSignup></UserSignup>,
    },
    {
      path: "/truckentry",
      element: <TruckEntry />,
    },
    {
      path: "/client",
      element: <DeliveryClient />,
    },
    {
      path: "/final-chalan",
      element: <FinalTruckChalan />
    }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
