import React from "react";
import { Form, Input, Icon, Button, Alert, Checkbox } from "antd";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import styles from "./SignupForm.module.css";

const schema = Yup.object().shape({
  email: Yup.string("Email")
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  name: Yup.string().required("Please enter your name"),
  password: Yup.string().required("Please enter your password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match")
    .required("Please confirm your password"),
  agreement: Yup.bool().oneOf([true], "You must accept the agreement")
});

export default props => {
  const onSubmit = (data, actions) => {
    actions.setStatus(null); // We clear any status from a previous submission
    props.onSubmit(data, actions);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        agreement: false,
        avatar: null
      }}
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
            validateStatus={errors.name && touched.name ? "error" : null}
            help={errors.name && touched.name ? errors.name : null}
          >
            <Input
              prefix={<Icon type="user" />}
              name="name"
              placeholder="Name"
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
          <Form.Item
            validateStatus={
              errors.confirmPassword && touched.confirmPassword ? "error" : null
            }
            help={
              errors.confirmPassword && touched.confirmPassword
                ? errors.confirmPassword
                : null
            }
          >
            <Input
              prefix={<Icon type="lock" />}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            className={styles.formItem}
            validateStatus={
              errors.agreement && touched.agreement ? "error" : null
            }
            help={
              errors.agreement && touched.agreement ? errors.agreement : null
            }
          >
            <Checkbox name="agreement" onChange={handleChange}>
              I have read the <a href="/agreement">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item className={styles.actions}>
            <Button
              type="primary"
              htmlType="submit"
              loading={isSubmitting}
              className={styles.signupButton}
            >
              Sign up
            </Button>
            <span>
              Already have an account? <Link to="/signin">Sign in now!</Link>
            </span>
          </Form.Item>
        </Form>
      )}
    />
  );
};
