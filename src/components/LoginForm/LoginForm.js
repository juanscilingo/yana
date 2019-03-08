import React, { useRef } from "react";
import { Form, Input, Icon, Checkbox, Button, Alert } from "antd";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";

const schema = Yup.object().shape({
  email: Yup.string("Email")
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  password: Yup.string().required("Please enter your password"),
  rememberMe: Yup.bool()
});

export default props => {
  const onSubmit = (data, actions) => {
    actions.setStatus(null); // We clear any status from a previous submission
    props.onSubmit(data, actions);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
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
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item className={styles.rememberMeContainer}>
            <Checkbox name="rememberMe" onChange={handleChange}>
              Remember me
            </Checkbox>
            <a className={styles.forgotPassword} href="/">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              loading={isSubmitting}
              className={styles.loginButton}
            >
              Log in
            </Button>
            <span>
              Or <Link to="/register">register now!</Link>
            </span>
          </Form.Item>
        </Form>
      )}
    />
  );
};
