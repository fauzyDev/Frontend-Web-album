import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import "aos/dist/aos.css";
 
import { ThemeProvider } from "@material-tailwind/react";
import ErrorPage from "./error-page";
import Page from "./pages/Dashboard/page"
import Upload from "./pages/Dashboard/Upload";
import Login from "./Login/page";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/pages/dashboard",
      element: <Page/>
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
