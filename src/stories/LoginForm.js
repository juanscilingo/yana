import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import LoginForm from "../components/LoginForm/LoginForm";

storiesOf("LoginForm", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Submission Success", () => (
    <div
      style={{
        maxWidth: 500,
        padding: 20,
        backgroundColor: "white",
        margin: 20
      }}
    >
      <LoginForm
        onSubmit={(data, actions) => {
          action("Submitted")(data, actions);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 2000);
        }}
      />
    </div>
  ))
  .add("Submission Error", () => (
    <div
      style={{
        maxWidth: 500,
        padding: 20,
        backgroundColor: "white",
        margin: 20
      }}
    >
      <LoginForm
        onSubmit={(data, actions) => {
          action("Submitted")(data, actions);
          setTimeout(() => {
            actions.setSubmitting(false);
            actions.setStatus({
              error: true,
              errorMessage: "The specified credentials are invalid"
            });
          }, 2000);
        }}
      />
    </div>
  ));
