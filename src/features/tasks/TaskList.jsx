import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TaskItem from "./components/TaskItem";
import "./taskList.style.css";

const TaskList = ({ tasks, removeTask, openEditModal, onDateChange }) => {
  const { date } = useParams();

  useEffect(() => {
    onDateChange(date);
  }, [date, onDateChange]);

  const filteredTasks = date
    ? tasks.filter((task) => task.date === date)
    : tasks;

  const totalHoursForSelectedDate = filteredTasks.reduce(
    (sum, task) => sum + Number(task.hours),
    0
  );

  return (
    <main className="main">
      <div className="wrap">
        {filteredTasks.length > 0 ? (
          <>
            <div className="task-list">
              {filteredTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  hours={task.hours}
                  onRemove={() => removeTask(task.id)}
                  onEdit={() => openEditModal(task)}
                />
              ))}
            </div>
            <div className="total align-right">
              <label className="total-label">Total:</label>
              <input
                className="total-input"
                type="text"
                readOnly
                value={totalHoursForSelectedDate}
              />
            </div>
          </>
        ) : (
          <p className="no-tasks">No tasks available for this date.</p>
        )}
      </div>
    </main>
  );
};

export default TaskList;
