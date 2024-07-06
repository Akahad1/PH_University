import { ReactNode } from "react";
import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/student/CreateStudent";
import { NavLink } from "react-router-dom";

type TRoute = {
  path: string;
  element: ReactNode;
};
type TSideRoute = {
  key: string;
  label: ReactNode;
  children?: TSideRoute[];
};
export const adminPaths = [
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
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create-Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Create-Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
  },
];
// export const adminPaths = [
//   { path: "dashBoard", element: <AdminDashBoard></AdminDashBoard> },
//   { path: "create-student", element: <CreateStudent></CreateStudent> },
//   { path: "create-admin", element: <CreateAdmin></CreateAdmin> },
//   { path: "create-faculty", element: <CreateFaculty></CreateFaculty> },
// ];

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((child) =>
      acc.push({
        path: child.path,
        element: child.element,
      })
    );
  }
  return acc;
}, []);

export const AdminSideBarItems = adminPaths.reduce(
  (acc: TSideRoute[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  },
  []
);
