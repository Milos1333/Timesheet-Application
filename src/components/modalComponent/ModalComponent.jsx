import React, { useState } from "react";
import { Modal, Button, Input, Form } from "antd";
import "./modalComponent.style.css";

const ModalComponent = ({ isModalOpen, closeModal, addTask }) => {
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = () => {
    if (!title || !hours || isNaN(hours) || hours <= 0 || hours > 24) return;
    addTask(title, hours);
    setTitle("");
    setHours("");
    closeModal();
  };

  const handleHoursChange = (e) => {
    let value = e.target.value.replace(/^0+/, ""); // Uklanja vodeće nule
    if (/^\d*$/.test(value) && value <= 24) {
      setHours(value);
    }
  };

  return (
    <Modal
      title="Create a task:"
      open={isModalOpen}
      onCancel={closeModal}
      footer={null}
    >
      <Form onFinish={handleSubmit}>
        <div className="form-item">
          <label className="form-label">TITLE:</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title here..."
          />
        </div>

        <div className="form-item">
          <label className="form-label">HOURS:</label>
          <Input
            value={hours}
            onChange={handleHoursChange}
            placeholder="Add hours here..."
            maxLength={2} // Ograničava unos na 2 cifre
          />
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
