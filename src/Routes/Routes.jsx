import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Apartments from "../pages/Apartments/Apartments";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddNewHouse from "../pages/Dashboard/AddNewHouse/AddNewHouse";
import Dashboard from "../Layout/Dashboard";
import MyHouses from "../pages/Dashboard/MyHouses/MyHouses";
import ManageHouses from "../pages/Dashboard/ManageHouses/ManageHouses";
import AllHouses from "../pages/Home/AllHouses/AllHouses";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apartments",
        element: <Apartments></Apartments>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      // {
      //   path: "/addnewhouse",
      //   element: <AddNewHouse></AddNewHouse>,
      // },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "addnewhouse",
        element: <AddNewHouse></AddNewHouse>,
      },
      {
        path: "myhouses",
        // element: <MyHouses></MyHouses>,
        element: <AllHouses></AllHouses>,
      },
      {
        path: "managehouses",
        element: <ManageHouses></ManageHouses>,
      },
    ],
  },
]);
