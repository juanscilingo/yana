import React from "react";
import { Form, Input, Icon, Button, Alert } from "antd";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import styles from "./SigninForm.module.css";

const schema = Yup.object().shape({
  email: Yup.string("Email")
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  password: Yup.string().required("Please enter your password")
});

export default props => {
  const onSubmit = (data, actions) => {
    actions.setStatus(null); // We clear any status from a previous submission
    props.onSubmit(data, actions);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={schema}
      render={({
        errors,
        status,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setStatus
      }) => (
        <Form onSubmit={handleSubmit}>
          {status && status.error && (
            <Form.Item>
              <Alert
                message={status.errorMessage}
                type="error"
                showIcon
                closable
                afterClose={() => setStatus(null)}
              />
            </Form.Item>
          )}
          <Form.Item
            validateStatus={errors.email && touched.email ? "error" : null}
            help={errors.email && touched.email ? errors.email : null}
          >
            <Input
              prefix={<Icon type="user" />}
              name="email"
              placeholder="Email"
              autoComplete="username"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={
              errors.password && touched.password ? "error" : null
            }
            help={errors.password && touched.password ? errors.password : null}
          >
            <Input
              prefix={<Icon type="lock" />}
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item className={styles.actions}>
            <Button
              type="primary"
              htmlType="submit"
              loading={isSubmitting}
              className={styles.signinButton}
            >
              Sign in
            </Button>
            <span>
              Or <Link to="/signup">sign up now!</Link>
            </span>
            <a className={styles.forgotPassword} href="/">
              Forgot password
            </a>
          </Form.Item>
        </Form>
      )}
    />
  );
};
