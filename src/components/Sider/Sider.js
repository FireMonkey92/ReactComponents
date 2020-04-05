import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
const { Sider } = Layout;

import "./Sider.less";

export default class SiderBar extends Component {
  render() {
    return (
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <LaptopOutlined />
                Components
              </span>
            }
          >
            <Menu.Item key="5">Loading 1</Menu.Item>
            <Menu.Item key="6">Loading 2</Menu.Item>
            <Menu.Item key="7">Loading 3</Menu.Item>
            <Menu.Item key="8">Loading 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <NotificationOutlined />
                subnav 3
              </span>
            }
          >
            <Menu.Item key="9">Loading 2</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
