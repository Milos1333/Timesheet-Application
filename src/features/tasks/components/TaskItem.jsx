import React, { useState } from "react";
import iconDelete from "../../../assets/deleteIcon.png";
import iconEdit from "../../../assets/editIcon.png";
import "./taskItem.style.css";
import { Popconfirm } from "antd";

const TaskItem = ({ id, title, hours, onRemove, onEdit }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const removeTask = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onRemove(id);
    }, 500);
  };

  return (
    <div className={`item-row ${isDeleting ? "deleting" : ""}`}>
      <div className="check-flag">
        <span className="small-text-label">Title</span>
        <span className="small-text-label hours">Hours</span>
        <span className="check-flag-label">{title}</span>
        <span className="hours-box">{hours}</span>
        <div className="task-actions">
          <button className="edit-btn" onClick={() => onEdit(id)}>
            <img src={iconEdit} alt="Edit" />
          </button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={removeTask}
            onCancel={() => setIsDeleting(false)}
            okText="Yes"
            cancelText="No"
          >
            <button className="delete-btn">
              <img src={iconDelete} alt="Delete" />
            </button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
