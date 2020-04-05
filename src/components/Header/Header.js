import React, { Component } from 'react'
import { Layout, Menu, } from 'antd';
const { Header } = Layout;


export default class MainHeader extends Component {
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Components</Menu.Item>
          <Menu.Item key="2">Documentation</Menu.Item>
          <Menu.Item key="3">Help</Menu.Item>
        </Menu>
      </Header>
    )
  }
}
