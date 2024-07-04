import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      This is admin lay out
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
