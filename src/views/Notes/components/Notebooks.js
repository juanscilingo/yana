import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getNotebooks, createNotebook } from "../../../redux/actions/notebooks";
import { Button, message } from "antd";
import NotebookCreatorModal from "../../../components/NotebookCreator/NotebookCreatorModal";

function Notebooks(props) {
  const { getNotebooks, notebooks } = props;
  const [modalIsVisible, setModalIsVisible] = useState(false);

  useEffect(() => {
    getNotebooks();
  }, [getNotebooks]);

  const createNotebook = (notebook, actions) => {
    props
      .createNotebook(notebook)
      .then(() => {
        setModalIsVisible(false);
        actions.resetForm();
        message.success("The notebook was created successfully");
      })
      .catch(result => {
        actions.setSubmitting(false);
        actions.setStatus({
          error: true,
          errorMessage: result.errorMessage
        });
      });
  };

  return (
    <div>
      <ul>
        {notebooks.map(notebook => (
          <li>{notebook.name}</li>
        ))}
      </ul>
      <Button type="primary" onClick={() => setModalIsVisible(true)}>
        New Notebook
      </Button>
      <NotebookCreatorModal
        visible={modalIsVisible}
        onCancel={() => setModalIsVisible(false)}
        onOk={createNotebook}
      />
    </div>
  );
}

export default connect(
  ({ notebooks }) => ({ notebooks }),
  { getNotebooks, createNotebook }
)(Notebooks);
