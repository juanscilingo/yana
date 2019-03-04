import React from "react";
import { Layout, Menu, Icon } from "antd";
import styles from "./Navbar.module.css";

const { Header } = Layout;

export default function({ collapsed, onCollapse }) {
  return (
    <Header className={styles.navbar}>
      <Icon
        className={styles.collapseTrigger}
        type={collapsed ? "menu-unfold" : "menu-fold"}
        onClick={onCollapse}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
}
