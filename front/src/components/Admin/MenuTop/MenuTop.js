import React from "react";
import logo from "../../../assets/img/png/logo-white.png";
import { Button } from "antd";
import { MenuUnfoldOutlined, PoweroffOutlined } from "@ant-design/icons";

import "./MenuTop.scss";

export default function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={logo} alt="algo" />
        <Button type="link" onClick={() => console.log("click")}>
          <MenuUnfoldOutlined />
        </Button>
      </div>

      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("clickOut")}>
        <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
