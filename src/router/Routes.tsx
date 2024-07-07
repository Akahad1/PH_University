import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import About from "../pages/About";
import Conract from "../pages/Conract";
import { adminPaths } from "./admin.routes";
import routeGenarator from "../utils/routeGenarator";
import { facultyPaths } from "./faculty.routes";

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
    element: <App></App>,
    children: routeGenarator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenarator(facultyPaths),
  },
]);

export default router;
