import "./App.css";

import { Layout, Menu } from "antd";
import React from "react";
import CreateVendorForm from "./components/CreateVendorForm";


const { Header, Content, Sider } = Layout;
const App = () => (
  <Layout   style={{
    height:"150vh"
  }}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        items={["Create Vendor", "Get All Vendors"].map((val) => ({
          label: `${val}`,
        }))}
      />
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{
          padding: 0,
        }}
      />
      <Content
        style={{
          margin: "24px 16px 0",
        }}
      >
      <CreateVendorForm/>
      </Content>
    </Layout>
  </Layout>
);
export default App;
