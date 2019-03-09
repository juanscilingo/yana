import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./Login.module.css";
import logo from "../../assets/logo.png";
import LoginForm from "../../components/LoginForm/LoginForm";
import background from "../../assets/background-blue.png";
import { signin } from "../../redux/actions/authActions";
import { connect } from "react-redux";

const Login = props => {
  const onSubmit = (credentials, actions) => {
    props
      .signin(credentials)
      .then(() => props.history.push("/profile"))
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

const wrappedLogin = withRouter(Login);

export default connect(
  null,
  { signin }
)(wrappedLogin);
