import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/LayoutRoot";
import Index from "./IndexPage";
import ErrorPage from "./404";
import Projects from "./ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/pro",
        element: <Projects />,
      },
    ],
  },
]);

export default router;
