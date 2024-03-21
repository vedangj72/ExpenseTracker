import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Post from "./components/Post";
import Home from "./components/Home";
import View from "./components/View";

const router =createBrowserRouter([
  {
    path: "/Post",
    element:<Post/>
  },
  {
    path: "/",
    element:<Home/>
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>
);
