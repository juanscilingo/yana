import React, { useState } from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.css";

const { Content } = Layout;

export default function({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Layout className={styles.layoutContainer}>
      <Sidebar collapsed={isCollapsed} onCollapse={setIsCollapsed} />
      <Layout>
        <Navbar
          collapsed={isCollapsed}
          onCollapse={() => setIsCollapsed(!isCollapsed)}
        />
        <Layout className={styles.contentWrapper}>
          <Content className={styles.content}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
