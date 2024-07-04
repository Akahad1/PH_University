import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import About from "../pages/About";
import Conract from "../pages/Conract";
import { adminPaths } from "./admin.routes";
import AdminLayout from "../componets/layout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/about", element: <About></About> },
      { path: "/contract", element: <Conract></Conract> },
    ],
  },
  { path: "/login", element: <Login></Login> },
  { path: "/register", element: <Register></Register> },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: adminPaths,
  },
]);

export default router;
