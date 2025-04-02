import React, { useState } from "react";
import { Modal, Button, Input, Form } from "antd";
import "./modalComponentCreate.style.css";

const ModalComponentCreate = ({
  isModalOpen,
  closeModal,
  addTask,
  selectedDate,
  tasks,
}) => {
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState("");
  const [error, setError] = useState("");
  const [titleError, setTitleError] = useState("");

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
      setError("Please enter a hours.");
      setTitleError("Please enter a title.");
      return;
    } else {
      setError("");
      setTitleError("");
    }

    if (!hours) {
      setError("Please enter a hours.");
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

    if (selectedDate) {
      const totalHoursForSelectedDate = tasks
        .filter((task) => task.date === selectedDate)
        .reduce((sum, task) => sum + Number(task.hours), 0);

      if (totalHoursForSelectedDate + parsedHours > 24) {
        setError("Total hours for the selected date cannot exceed 24!");
        setHours("");
        return;
      }
    }

    addTask(title, parsedHours);
    handleCancel();
  };

  const handleHoursChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setHours(value);
      return;
    }

    if (/^\d*$/.test(value) && Number(value) <= 24 && Number(value) > 0) {
      setHours(value);
    }
  };

  return (
    <Modal
      title="Create a task:"
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
          {error && <p className="error-text">{error}</p>}{" "}
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

export default ModalComponentCreate;
