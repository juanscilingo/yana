import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Signup.module.css";
import background from "../../assets/background-blue.png";
import SignupForm from "../../components/SignupForm";
import { signup } from "../../redux/actions/authActions";

function Signup(props) {
  const onSubmit = (data, actions) => {
    props
      .signup(data)
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
        <SignupForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default connect(
  null,
  { signup }
)(withRouter(Signup));
