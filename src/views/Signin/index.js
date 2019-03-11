import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./Signin.module.css";
import logo from "../../assets/logo.png";
import SigninForm from "../../components/SigninForm";
import background from "../../assets/background-blue.png";
import { signin } from "../../redux/actions/auth";
import { connect } from "react-redux";

const Signin = props => {
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
        <SigninForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const wrappedSignin = withRouter(Signin);

export default connect(
  null,
  { signin }
)(wrappedSignin);
