import React from "react";
import { Form, Input, Icon, Checkbox, Button } from "antd";
import styles from "./Login.module.css";
import logo from "../../assets/logo.png";

const { Item: FormItem } = Form;

function Login(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" width={200} />
        </div>
        <Form onSubmit={handleSubmit}>
          <FormItem>
            {getFieldDecorator("email", {
              rules: [
                { type: "email", message: "Please enter a valid email!" },
                { required: true, message: "Please enter your email!" }
              ]
            })(<Input prefix={<Icon type="user" />} placeholder="Email" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please enter your Password!" }
              ]
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem className={styles.rememberMeContainer}>
            {getFieldDecorator("rememberMe", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className={styles.forgotPassword} href="/">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
            >
              Log in
            </Button>
            <span>
              Or <a href="/">register now!</a>
            </span>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}

export default Form.create()(Login);
