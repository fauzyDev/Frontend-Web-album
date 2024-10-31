import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import "aos/dist/aos.css";
 
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "./error-page";
import Page from "./pages/Dashboard/page"
import Upload from "./pages/Dashboard/Upload";
import Login from "./Login/page";
import ProtectedRoute from "./services/protected";

const queryClient = new QueryClient()

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
      <ThemeProvider>
        <RouterProvider router={router}/>
      </ThemeProvider>
    )
  } 
 
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Main/>
    </QueryClientProvider>
  </React.StrictMode>
);
