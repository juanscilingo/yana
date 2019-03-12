import React, { useRef } from "react";
import { Modal } from "antd";
import NotebookCreator from "./NotebookCreator";

function NotebookCreatorModal(props) {
  const { visible, onOk, onCancel } = props;
  const formRef = useRef(null);

  const closeModal = () => {
    formRef.current.resetForm();
    onCancel();
  };

  return (
    <Modal
      title="New Notebook"
      visible={visible}
      onCancel={closeModal}
      footer={null}
    >
      <NotebookCreator onSubmit={onOk} formRef={formRef} />
    </Modal>
  );
}

export default NotebookCreatorModal;
