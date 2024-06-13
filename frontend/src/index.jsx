import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Post from "./components/Post";
import Home from "./components/Home";
import View from "./components/View";
import Navigation from "./Navigation/Navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "Post",
        element: <Post />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "view",
        element: <View />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
