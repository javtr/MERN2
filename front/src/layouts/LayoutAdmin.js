import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MenuTop from "../components/Admin/MenuTop"

import "./LayoutAdmin.scss";
import { Content, Footer, Header } from "antd/lib/layout/layout";

export default function LayoutAdmin() {
  return (
    <Layout>
      <Layout className="layout-admin">
        <Header className="layout-admin__header">
          <MenuTop/>
        </Header>
        <Content className="layout-admin__content">
          <Outlet />
        </Content>
        <Footer className="layout-admin__footer">
          <h2>Javier Triana</h2>
        </Footer>
      </Layout>
    </Layout>
  );
}
