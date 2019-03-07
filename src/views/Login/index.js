import React from "react";
import styles from "./Login.module.css";
import logo from "../../assets/logo.png";
import LoginForm from "../../components/LoginForm/LoginForm";

export default () => {
  const onSubmit = (data, actions) => {
    console.log(data);
    setTimeout(() => {
      actions.setSubmitting(false);
      actions.setStatus({
        error: true,
        errorMessage: "The specified credentials are invalid"
      });
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" width={200} />
        </div>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
