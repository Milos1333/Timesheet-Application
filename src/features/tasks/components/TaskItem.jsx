import React, { useState } from "react";
import iconDelete from "../../../assets/deleteIcon.png";
import iconEdit from "../../../assets/editIcon.png";
import "./taskItem.style.css";

const TaskItem = ({ id, title, hours, onRemove, onEdit }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onRemove(id);
    }, 300);
  };

  return (
    <div className={`item-row ${isDeleting ? "deleting" : ""}`}>
      <div className="check-flag">
        <span className="small-text-label">Title</span>
        <span className="small-text-label hours">Hours</span>
        <span className="check-flag-label">{title}</span>
        <span className="hours-box">{hours}</span>
        <div className="task-actions">
          <button className="delete-btn" onClick={handleDelete}>
            <img src={iconDelete} alt="Delete" />
          </button>
          <button className="edit-btn" onClick={() => onEdit(id)}>
            <img src={iconEdit} alt="Edit" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
