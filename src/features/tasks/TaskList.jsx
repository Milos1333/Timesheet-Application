import React from "react";
import TaskItem from "./components/TaskItem";
import ModalComponent from "../../components/modalComponent/ModalComponent";
import "./taskList.style.css";

const TaskList = ({ tasks, removeTask }) => {
  const totalHours = tasks.reduce((sum, task) => sum + Number(task.hours), 0);

  return (
    <main className="main">
      <div className="wrap">
        {tasks.length > 0 ? (
          <>
            <div className="task-list">
              {tasks.map((task, index) => (
                <TaskItem
                  key={index}
                  title={task.title}
                  hours={task.hours}
                  onRemove={() => removeTask(index)}
                />
              ))}
            </div>

            <div className="total align-right">
              <label className="total-label">Total:</label>
              <input
                className="total-input"
                type="text"
                readOnly
                value={totalHours}
              />
            </div>
          </>
        ) : (
          <p className="no-tasks">No tasks available.</p>
        )}
      </div>

      <ModalComponent totalHours={totalHours} />
    </main>
  );
};

export default TaskList;
