import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoutes from "./AdminRoutes";
import AdminHome from "../Pages/Dashboard/AdminHome";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UserRoutes from "./UserRoutes";
import UpdateItem from "../Pages/Dashboard/UpdateItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children: [
      // normal users routes
      {
        path: 'cart',
        element:  <UserRoutes><Cart></Cart></UserRoutes>
      },
      // admin routes
      {
        path: 'adminHome',
        element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path: 'addItems',
        element:  <AdminRoutes><AddItems></AddItems></AdminRoutes>
      },
      {
        path: 'allUsers',
        element: <AdminRoutes> <AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: 'manageItems',
        element: <AdminRoutes> <ManageItems></ManageItems></AdminRoutes>
      },
      {
        path: 'update/:id',
        element: <AdminRoutes> <UpdateItem></UpdateItem></AdminRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
    ]
  },
]);
