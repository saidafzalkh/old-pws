import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/LayoutRoot";
import Index from "./IndexPage";
import ErrorPage from "./404";

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
        element: <h1>projects?</h1>,
      },
    ],
  },
]);

export default router;
