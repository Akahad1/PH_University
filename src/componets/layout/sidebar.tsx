import { Layout, Menu } from "antd";
import sidebarItemGenarator from "../../utils/sidebarItemGenarator";
import { facultyPaths } from "../../router/faculty.routes";
import { useAppSelector } from "../../redux/hook";
import {
  TUser,
  useCurrentToken,
  useCurrentUser,
} from "../../redux/Features/auth/AuthSlice";
import { studentPaths } from "../../router/student.routes";

import { veryfiyToken } from "../../utils/veryfiyToken";
import { adminPaths } from "../../router/admin.routes";
const { Sider } = Layout;

const Sidebar = () => {
  let sidebarItem;
  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };
  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = veryfiyToken(token);
  }

  switch ((user as TUser)!.role) {
    case userRole.ADMIN:
      sidebarItem = sidebarItemGenarator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItem = sidebarItemGenarator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItem = sidebarItemGenarator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <p>Ph uni</p>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItem}
      />
    </Sider>
  );
};

export default Sidebar;
