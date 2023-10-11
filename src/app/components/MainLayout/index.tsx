import React, { PropsWithChildren } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Header />
      {children}
      <Outlet />
    </Layout>
  );
};

export default MainLayout;
