import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Search from "./src/pages/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
root.render(<App />);
