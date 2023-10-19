"use client";

import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  AppstoreAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const { Header } = Layout;

const Navbar = () => {
  const router = useRouter();

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={[router.pathname]}>
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <a onClick={() => router.push("/")}>Home</a>
        </Menu.Item>
        <Menu.Item key="/products" icon={<AppstoreAddOutlined />}>
          <a onClick={() => router.push("/products")}>Products</a>
        </Menu.Item>
        <Menu.Item key="/profile" icon={<UserOutlined />}>
          <a onClick={() => router.push("/profile")}>Profile</a>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
