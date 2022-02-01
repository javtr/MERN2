import React, { useState }  from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MenuTop from "../components/Admin/MenuTop"
import MenuSider from "../components/Admin/MenuSider"

import "./LayoutAdmin.scss";
import { Content, Footer, Header } from "antd/lib/layout/layout";

export default function LayoutAdmin(props) {
const [menuCollapse, setMenuCollapsed] = useState(false);


  return (
    <Layout>
      <MenuSider/>
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
