import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import "aos/dist/aos.css";
 
import { ThemeProvider } from "@material-tailwind/react";
import ErrorPage from "./error-page";
import Dashboard from "./pages/Dashboard/page";
import Upload from "./pages/Dashboard/Upload";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/pages/dashboard",
      element: <Dashboard/>
    },
    {
      path: "/pages/dashboard/upload",
      element: <Upload/>
    }
  ]);
 
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
     <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);
