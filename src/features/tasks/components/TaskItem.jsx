const TaskItem = ({ title, hours, onRemove }) => {
  return (
    <div className="item-row">
      <div className="check-flag">
        <span className="small-text-label">Title</span>
        <span className="small-text-label hours">Hours</span>
        <span className="check-flag-label">{title}</span>
        <span className="hours-box">{hours}</span>
        <button className="delete-btn" onClick={onRemove}>
          🗑
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
