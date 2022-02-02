import React from "react";
import logo from "../../../assets/img/png/logo-white.png";
import { Button } from "antd";
import Icon, {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={logo} alt="algo" />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <Icon
            component={menuCollapsed ? MenuFoldOutlined : MenuUnfoldOutlined}
          />
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
