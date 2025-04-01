import React, { useState, useEffect } from "react";
import { Modal, Button, Input, Form } from "antd";
import "./modalComponentEdit.style.css";

const ModalComponentEdit = ({
  isModalOpen,
  closeModal,
  saveChanges,
  currentTask,
  totalHours,
}) => {
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState("");
  const [error, setError] = useState("");
  const [titleError, setTitleError] = useState("");

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setHours(currentTask.hours.toString());
    }
  }, [currentTask, isModalOpen]);

  const handleCancel = () => {
    setTitle("");
    setHours("");
    setError("");
    setTitleError("");
    closeModal();
  };

  const handleSubmit = () => {
    const parsedHours = Number(hours);

    if (!hours && !title) {
      setError("Please enter hours.");
      setTitleError("Please enter a title.");
      return;
    } else {
      setError("");
      setTitleError("");
    }

    if (!hours) {
      setError("Please enter hours.");
      return;
    } else if (parsedHours <= 0 || parsedHours > 24) {
      setError("Hours must be between 1 and 24.");
      return;
    } else {
      setError("");
    }

    if (!title) {
      setTitleError("Please enter a title.");
      return;
    } else {
      setTitleError("");
    }

    const totalWithoutCurrent = totalHours - Number(currentTask.hours);
    if (totalWithoutCurrent + parsedHours > 24) {
      setError("Total hours cannot exceed 24!");
      return;
    }

    saveChanges({ ...currentTask, title, hours: parsedHours });
    handleCancel();
  };

  const handleHoursChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setHours(value);
      return;
    }

    if (/^\d*$/.test(value)) {
      const numValue = Number(value);
      if (numValue > 0 && numValue <= 24) {
        setHours(value);
      }
    }
  };

  return (
    <Modal
      title="Edit Task"
      open={isModalOpen}
      onCancel={handleCancel}
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
          {titleError && <p className="error-text">{titleError}</p>}
        </div>

        <div className="form-item">
          <label className="form-label">HOURS:</label>
          <Input
            value={hours}
            onChange={handleHoursChange}
            placeholder="Add hours here..."
            maxLength={2}
          />
          {error && <p className="error-text">{error}</p>}
        </div>

        <div className="btn-wrap">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalComponentEdit;
