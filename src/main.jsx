/* eslint-disable react/jsx-no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./component/About/About.jsx";
import Home from "./component/Home/Home.jsx";
import Order from "./component/Order/Order.jsx";
import Main from "./component/layout/main.jsx";
import "./index.css";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([

  { 
    path: "/", 
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch ('shirt.json') 
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/order',
        element: <Order></Order>
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
