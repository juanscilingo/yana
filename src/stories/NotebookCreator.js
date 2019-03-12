import React, { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import NotebookCreator from "../components/NotebookCreator/NotebookCreator";
import { Button } from "antd";
import NotebookCreatorModal from "../components/NotebookCreator/NotebookCreatorModal";

function ModalExample() {
  const [visible, setVisible] = useState(false);

  return (
    <div
      style={{
        padding: 20,
        margin: 20
      }}
    >
      <Button type="primary" onClick={() => setVisible(true)}>
        Show Modal
      </Button>
      <NotebookCreatorModal
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={(data, actions) => {
          action("Submitted")(data, actions);
          setTimeout(() => {
            actions.setSubmitting(false);
            setVisible(false);
          }, 2000);
        }}
      />
    </div>
  );
}

storiesOf("NotebookCreator", module)
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
      <NotebookCreator
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
      <NotebookCreator
        onSubmit={(data, actions) => {
          action("Submitted")(data, actions);
          setTimeout(() => {
            actions.setSubmitting(false);
            actions.setStatus({
              error: true,
              errorMessage: "The notebook could not be created"
            });
          }, 2000);
        }}
      />
    </div>
  ))
  .add("Modal", () => <ModalExample />);
