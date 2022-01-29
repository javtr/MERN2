import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import "./LayoutBasic.scss";
import { Content, Footer, Header } from "antd/lib/layout/layout";

export default function LayoutBasic() {
  return (
    <Layout>
      <Layout className="layout-basic">
        <Header className="layout-basic__header">
          <h2> </h2>
        </Header>
        <Content className="layout-basic__content">
          <Outlet />
        </Content>
        <Footer className="layout-basic__footer">
          <h2>Javier Triana</h2>
        </Footer>
      </Layout>
    </Layout>
  );
}
