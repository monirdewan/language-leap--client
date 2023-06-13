import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp"
import Login from "../Pages/Login/Login";
import DashBoard from "../Layout/DashBoard";
import ManageUsers from "../Pages/DashBoard/ManageUsers/ManageUsers";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
           path:'/',
           element:<Home></Home> 
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'dashboard',
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:'manageusers',
          element:<ManageUsers></ManageUsers>
        }
      ]
    }
  ]);