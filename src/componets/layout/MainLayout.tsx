import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const items: MenuProps["items"] = [
    {
      key: "DashBoard",
      label: <NavLink to={"/admin/dashBoard"}>DashBoard</NavLink>,
    },
    {
      key: "Profile",
      label: "Profile",
    },
    {
      key: "User Managment",
      label: "User Managment",
      children: [
        {
          key: "Create Admin",
          label: <NavLink to={"/admin/create-admin"}>Create Admin</NavLink>,
        },
        {
          key: "Create Faculty",
          label: <NavLink to={"/admin/create-faculty"}>Create Faculty</NavLink>,
        },
        {
          key: "Create Student",
          label: <NavLink to={"/admin/create-student"}>Create student</NavLink>,
        },
      ],
    },
  ];

  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
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
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet></Outlet>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
