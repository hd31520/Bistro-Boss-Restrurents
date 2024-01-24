import {
    createBrowserRouter
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import PrivetRoute from "./PrivetRoute";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItem/AddItems";
import AdminRoute from "./AdminRoute";



  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <Home></Home>
          },
          {
            path: 'menu',
            element: <Menu></Menu>
          },
          {
            path: 'order',
            element: <Order></Order>
          },
          {
            path: 'order/:category',
            element: <Order></Order>
          },
          {
            path: 'login',
            element: <Login></Login>
          },
          {
            path: 'signup',
            element: <SignUp></SignUp>
          }
        ]
    },

    {
      path: 'dashboard',
      element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        // Admin Patch
        {
          path: 'allUsers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,

        },
        {
          path: 'addItems',
          element:<AdminRoute> <AddItems></AddItems></AdminRoute>
        }
      ]
    }
  ])


