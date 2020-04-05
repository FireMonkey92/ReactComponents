import React, { Component } from "react";
import { Layout } from "antd";
import MainHeader from "../../components/Header/Header";
import SiderBar from "../../components/Sider/Sider";
class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <MainHeader />
        <Layout>
          <SiderBar />
        </Layout>
      </Layout>
    );
  }
}
export default Dashboard;
