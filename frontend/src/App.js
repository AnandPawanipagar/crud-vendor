import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import React from "react";
import CreateVendorForm from "./components/CreateVendorForm";
import Home from "./components/Home";
import AllVendors from "./components/AllVendors";
const { Header, Content, Sider } = Layout;
const App = () => (
  <BrowserRouter>
    <Layout
      style={{
        height: "150vh",
      }}
    >
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
        <Menu theme="dark" mode="inline">
          <Menu.Item>
            <Link to="/create-vendor">Create Vendor</Link>
          </Menu.Item>
          <Menu.Item><Link to="/all-vendors-list">All Vendors List</Link></Menu.Item>
        </Menu>
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="create-vendor/*" element={<CreateVendorForm />} />
            <Route path="all-vendors-list/*" element={<AllVendors/>} />

          </Routes>
        </Content>
      </Layout>
    </Layout>
  </BrowserRouter>
);
export default App;
