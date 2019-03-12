import React from "react";
import { Form, Input, Button, Alert } from "antd";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./NotebookCreator.module.css";

const schema = Yup.object().shape({
  name: Yup.string("Name")
    .max(100, "The name cannot be longer than 100 characters")
    .required("Please enter a name"),
  description: Yup.string("Description").max(
    100,
    "The description cannot be longer than 100 characters"
  ),
  color: Yup.string("Color").required(),
  icon: Yup.string("Icon").required()
});

export default props => {
  const onSubmit = (data, actions) => {
    actions.setStatus(null); // We clear any status from a previous submission
    props.onSubmit(data, actions);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        color: "#017dc3",
        icon: "book"
      }}
      ref={props.formRef}
      onSubmit={onSubmit}
      validationSchema={schema}
      render={({
        values,
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
            validateStatus={errors.name && touched.name ? "error" : null}
            help={errors.name && touched.name ? errors.name : null}
          >
            <Input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={100}
              value={values.name}
            />
          </Form.Item>
          <Form.Item
            validateStatus={
              errors.description && touched.description ? "error" : null
            }
            help={
              errors.description && touched.description
                ? errors.description
                : null
            }
          >
            <Input
              name="description"
              placeholder="Description"
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={100}
              value={values.description}
            />
          </Form.Item>
          <Form.Item
            validateStatus={errors.color && touched.color ? "error" : null}
            help={errors.color && touched.color ? errors.color : null}
          >
            <Input
              name="color"
              placeholder="Color"
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={7}
              value={values.color}
            />
          </Form.Item>
          <Form.Item
            validateStatus={errors.icon && touched.icon ? "error" : null}
            help={errors.icon && touched.icon ? errors.icon : null}
          >
            <Input
              name="icon"
              placeholder="Icon"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.icon}
            />
          </Form.Item>
          <Form.Item className={styles.actions}>
            <Button
              type="primary"
              htmlType="submit"
              loading={isSubmitting}
              block
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      )}
    />
  );
};
