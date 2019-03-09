import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./Login.module.css";
import logo from "../../assets/logo.png";
import LoginForm from "../../components/LoginForm/LoginForm";
import authApi from "../../api/auth";
import background from "../../assets/background-blue.png";

const Login = ({ history }) => {
  const onSubmit = (credentials, actions) => {
    authApi
      .login(credentials)
      .then(result => history.push("/profile"))
      .catch(result => {
        actions.setSubmitting(false);
        actions.setStatus({
          error: true,
          errorMessage: result.errorMessage
        });
      });
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" width={200} />
        </div>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default withRouter(Login);
