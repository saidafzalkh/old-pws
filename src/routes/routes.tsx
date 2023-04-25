import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/LayoutRoot";
import ErrorPage from "./404";
import React, { lazy } from "react";
import LayoutLoading from "../layout/LayoutLoading";
import CVpage from "./CVpage";

const Index = lazy(() => import("./IndexPage"));
const Projects = lazy(() => import("./ProjectsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<LayoutLoading />}>
            <Index />
          </React.Suspense>
        ),
      },
      {
        path: "/pro",
        element: (
          <React.Suspense fallback={<LayoutLoading />}>
            <Projects />
          </React.Suspense>
        ),
      },
      {
        path: "/cv",
        element: (
          <React.Suspense fallback={<LayoutLoading />}>
            <CVpage />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;
