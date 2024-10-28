import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import "aos/dist/aos.css";
 
import { CssVarsProvider } from "@mui/joy/styles";
import { ThemeProvider } from "@material-tailwind/react";
import ErrorPage from "./error-page";
import Page from "./pages/Dashboard/page"
import Upload from "./pages/Dashboard/Upload";
import Login from "./Login/page";
import ProtectedRoute from "./services/protected";

export const Main = () => {

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
        element: (
          <ProtectedRoute>
            <Page/>
          </ProtectedRoute>
        )

      },
      {
        path: "/pages/dashboard/upload",
        element: (
          <ProtectedRoute>
            <Upload/>
          </ProtectedRoute>
        )
      }
    ]);

    return (
    <CssVarsProvider defaultMode="dark" modeStorageKey="joy-mode">
      <ThemeProvider>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </CssVarsProvider>
    )
  } 
 
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Main/>
  </React.StrictMode>
);
