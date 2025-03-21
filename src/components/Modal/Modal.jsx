import React from "react";
import { Modal, Button, Input, Form } from "antd";
import "../Modal/modal.style.css";

const ModalComponent = ({ isModalOpen, closeModal }) => {
  return (
    <Modal
      title="Create a task:"
      open={isModalOpen}
      onCancel={closeModal}
      footer={null}
    >
      <Form>
        <div className="form-item">
          <label className="form-label">TITLE:</label>
          <Input placeholder="Enter title here..." />
        </div>

        <div className="form-item">
          <label className="form-label">HOURS:</label>
          <Input placeholder="Add hours here..." />
        </div>

        <div className="btn-wrap">
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalComponent;
