import { Component, StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Error from "./Components/Error/Error.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import ProjectsDetails from "./Components/Projects/ProjectsDetails.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: '/',
        Component: App
      },
      {
        path: "/project_details/:id",
        Component: ProjectsDetails
      }
    ]
  },

  {
    path: "/*",
    Component: Error
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <MainLayout></MainLayout>
    </RouterProvider>
  </StrictMode>
);