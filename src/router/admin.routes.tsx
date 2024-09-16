import AcadamicFaculty from "../pages/admin/AcademicManagment/AcadamicFaculty";
import AcademicDepartment from "../pages/admin/AcademicManagment/AcademicDepartment";
import AcademicManagment from "../pages/admin/AcademicManagment/AcademicManagment";
import AcademicSemster from "../pages/admin/AcademicManagment/AcademicSemster";
import CreateADepeartment from "../pages/admin/AcademicManagment/CreateADepeartment";
import CreateAfaculty from "../pages/admin/AcademicManagment/CreateAfaculty";
import CreateASemster from "../pages/admin/AcademicManagment/CreateASemster";
import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/student/CreateStudent";

export const adminPaths = [
  {
    name: "DashBoard",
    path: "dashBoard",
    element: <AdminDashBoard></AdminDashBoard>,
  },
  {
    name: "Academic Managment",
    children: [
      {
        name: "Academic-Managment",
        path: "academicManagment",
        element: <AcademicManagment></AcademicManagment>,
      },
      {
        name: "Create A. Semester",
        path: "createASemster",
        element: <CreateASemster></CreateASemster>,
      },
      {
        name: "Academic-Semester",
        path: "academicSemester",
        element: <AcademicSemster></AcademicSemster>,
      },
      {
        name: "Create A. Faculty",
        path: "createAfaculty",
        element: <CreateAfaculty></CreateAfaculty>,
      },
      {
        name: "Academic-Faculty",
        path: "academicFaculty",
        element: <AcadamicFaculty></AcadamicFaculty>,
      },
      {
        name: "Create A. Department",
        path: "createAdepartment",
        element: <CreateADepeartment></CreateADepeartment>,
      },
      {
        name: "Academic-Department",
        path: "academicDepartment",
        element: <AcademicDepartment></AcademicDepartment>,
      },
    ],
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

// export const AdminSideBarItems = adminPaths.reduce(
//   (acc: TSideRoute[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }
//     return acc;
//   },
//   []
// );
