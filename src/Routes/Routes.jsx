import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp"
import Login from "../Pages/Login/Login";
import DashBoard from "../Layout/DashBoard";
import ManageUsers from "../Pages/DashBoard/ManageUsers/ManageUsers";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import InstructorHome from "../Pages/DashBoard/InstructorHome/InstructorHome";
import StudentHome from "../Pages/DashBoard/StudentHome/StudentHome";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import MyClasses from "../Pages/DashBoard/MyClasses/MyClasses";
import ManageClasses from "../Pages/DashBoard/ManageClasses/ManageClasses";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children:[
        {
           path:'/',
           element:<Home></Home> 
        },
        {
          path:'instructors',
          element:<Instructors></Instructors>
        },
        {
          path:'classes',
          element:<Classes></Classes>
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
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        //admin
        {
          path:'adminhome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'manageusers',
          element:<ManageUsers></ManageUsers>
        },
        {
          path:'manageclasses',
          element:<ManageClasses></ManageClasses>
        },
        //Instructor
        {
          path:'instructorhome',
          element:<InstructorHome></InstructorHome>
        },
        {
          path:'addaclass',
          element:<AddClass></AddClass>
        },
        {
          path:'myclasses',
          element:<MyClasses></MyClasses>
        },
       

        //Student
        {
          path:'studenthome',
          element:<StudentHome></StudentHome>
        }
      ]
    }
  ]);