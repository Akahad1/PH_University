import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/student/CreateStudent";
export const adminPaths2 = [
  {
    name: "DashBoard",
    path: "/admin/dashBoard",
    element: <AdminDashBoard></AdminDashBoard>,
  },
  {
    name: "User Managment",
    children: [
      {
        name: "Create-Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create-Student",
        path: "/admin/create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Create-Faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
  },
];
export const adminPaths = [
  { path: "dashBoard", element: <AdminDashBoard></AdminDashBoard> },
  { path: "create-student", element: <CreateStudent></CreateStudent> },
  { path: "create-admin", element: <CreateAdmin></CreateAdmin> },
  { path: "create-faculty", element: <CreateFaculty></CreateFaculty> },
];
