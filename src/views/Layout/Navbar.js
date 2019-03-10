import React from "react";
import { Layout, Menu, Icon, Avatar } from "antd";
import styles from "./Navbar.module.css";
import { connect } from "react-redux";
import { signout } from "../../redux/actions/authActions";
import { withRouter } from "react-router-dom";

const { Header } = Layout;

const Navbar = props => {
  const signoutUser = () => {
    props.signout().then(() => props.history.push("/signin"));
  };
  return (
    <Header
      className={styles.navbar}
      style={{
        width: props.collapsed ? "calc(100vw - 80px)" : "calc(100vw - 200px)"
      }}
    >
      <Icon
        className={styles.collapseTrigger}
        type={props.collapsed ? "menu-unfold" : "menu-fold"}
        onClick={props.onCollapse}
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
        <Menu.SubMenu
          className={styles.userContainer}
          title={
            <span>
              {props.auth.avatar ? (
                <Avatar shape="square" src={props.auth.avatar} />
              ) : (
                <Avatar
                  className={styles.userIcon}
                  shape="square"
                  icon="user"
                />
              )}
              <span className={styles.email}>{props.auth.email}</span>
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="signout" onClick={signoutUser}>
              <Icon type="logout" /> Signout
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
      </Menu>
    </Header>
  );
};

export default connect(
  state => ({ auth: state.auth }),
  { signout }
)(withRouter(Navbar));
