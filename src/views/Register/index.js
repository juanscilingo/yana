import React, { useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import background from "../../assets/background-blue.png";

const { Item: FormItem } = Form;

function Register(props) {
  const [confirmDirty, setConfirmDirty] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const handleConfirmBlur = e => {
    const value = e.target.value;
    setConfirmDirty(confirmDirty || !!value);
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Passwords don't match!");
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  const { getFieldDecorator } = props.form;

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.content}>
        <Form onSubmit={handleSubmit}>
          <Form.Item label="E-mail" className={styles.formItem}>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "Please enter valid E-mail!"
                },
                {
                  required: true,
                  message: "Please enter your E-mail!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="First Name" className={styles.formItem}>
            {getFieldDecorator("firstName", {
              rules: [
                {
                  required: true,
                  message: "Please enter your first name!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Last Name" className={styles.formItem}>
            {getFieldDecorator("lastName", {
              rules: [
                {
                  required: true,
                  message: "Please enter your last name!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password" className={styles.formItem}>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please enter a password!"
                },
                {
                  validator: validateToNextPassword
                }
              ]
            })(<Input type="password" />)}
          </Form.Item>
          <Form.Item label="Confirm Password">
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "Please confirm the password!"
                },
                {
                  validator: compareToFirstPassword
                }
              ]
            })(<Input type="password" onBlur={handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item className={styles.formItem}>
            {getFieldDecorator("agreement", {
              valuePropName: "checked"
            })(
              <Checkbox>
                I have read the <a href="/">agreement</a>
              </Checkbox>
            )}
          </Form.Item>
          <FormItem className={styles.formItem}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.registerButton}
            >
              Register
            </Button>
            <span>
              Already have an account? <Link to="/login">Login now!</Link>
            </span>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}

export default Form.create()(Register);
