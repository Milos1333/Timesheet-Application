import "./taskItem.style.css";
import iconDelete from "../../../assets/deleteIcon.png";
import iconEdit from "../../../assets/editIcon.png";

const TaskItem = ({ id, title, hours, onRemove }) => {
  return (
    <div className="item-row">
      <div className="check-flag">
        <span className="small-text-label">Title</span>
        <span className="small-text-label hours">Hours</span>
        <span className="check-flag-label">{title}</span>
        <span className="hours-box">{hours}</span>
        <div className="task-actions">
          <button className="delete-btn" onClick={() => onRemove(id)}>
            <img src={iconDelete} alt="Delete" />
          </button>
          <button className="edit-btn">
            <img src={iconEdit} alt="Edit" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
