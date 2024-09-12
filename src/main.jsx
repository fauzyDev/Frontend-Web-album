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
import ProtectedRoute from "./services/protected";


export const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  const handleLogin = (token) => {
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
    };

  const router = createBrowserRouter([
      {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "/login",
        element: <Login onLogin={handleLogin}/>
      },
      {
        path: "/pages/dashboard",
        element: (
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Page/>
          </ProtectedRoute>
        )

      },
      {
        path: "/pages/dashboard/upload",
        element: (
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Upload/>
          </ProtectedRoute>
        )
      }
    ]);

    return (
      <ThemeProvider>
        <RouterProvider router={router}/>
      </ThemeProvider>
    )
  } 
 
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);
