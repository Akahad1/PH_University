import AcadamicFaculty from "../pages/admin/AcademicManagment/AcadamicFaculty";
import AcademicDepartment from "../pages/admin/AcademicManagment/AcademicDepartment";
import AcademicManagment from "../pages/admin/AcademicManagment/AcademicManagment";
import AcademicSemster from "../pages/admin/AcademicManagment/AcademicSemster";
import CreateADepeartment from "../pages/admin/AcademicManagment/CreateADepeartment";
import CreateAfaculty from "../pages/admin/AcademicManagment/CreateAfaculty";
import CreateASemster from "../pages/admin/AcademicManagment/CreateASemster";
import AdminDashBoard from "../pages/admin/AdminDashBoard";
import Courses from "../pages/admin/CouresManagment/Courses";
import CreateCoures from "../pages/admin/CouresManagment/CreateCoures";
import OffreadCoures from "../pages/admin/CouresManagment/OffreadCoures";
import RegisrterdSemster from "../pages/admin/CouresManagment/RegisrterdSemster";
import SemesterRegister from "../pages/admin/CouresManagment/SemesterRegister";
import CreateAdmin from "../pages/admin/userManagment/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagment/CreateFaculty";
import CreateStudent from "../pages/admin/userManagment/CreateStudent";
import ShowStudent from "../pages/admin/userManagment/ShowStudent";
import StudentDetails from "../pages/admin/userManagment/StudentDetails";

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
        name: "Create-Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Student",
        path: "stduent",
        element: <ShowStudent></ShowStudent>,
      },
      {
        path: "studentData/:studentId",
        element: <StudentDetails></StudentDetails>,
      },
      {
        name: "Create-Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },

      {
        name: "Create-Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
  },
  {
    name: "Coures Managment",
    children: [
      {
        name: "Create-Coures",
        path: "create-coures",
        element: <CreateCoures></CreateCoures>,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Courses></Courses>,
      },
      {
        name: "Semster-Register",
        path: "semster-register",
        element: <SemesterRegister></SemesterRegister>,
      },
      {
        name: "Registered-Semster",
        path: "Registered-Semster",
        element: <RegisrterdSemster></RegisrterdSemster>,
      },

      {
        name: "Offerd-Courses",
        path: "offerd-courses",
        element: <OffreadCoures></OffreadCoures>,
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
