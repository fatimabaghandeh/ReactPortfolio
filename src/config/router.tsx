import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import App from "../pages/home";
import ProjectList from "../api/projects";
import Contact from "../pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "/projects",
        element: <ProjectList />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default router;
