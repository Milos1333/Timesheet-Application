import "./taskList.style.css";
import TaskItem from "./components/TaskItem";

const TaskList = ({ tasks, removeTask }) => {
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
                value={tasks.reduce((sum, task) => sum + Number(task.hours), 0)}
              />
            </div>
          </>
        ) : (
          <p className="no-tasks">No tasks available.</p>
        )}
      </div>
    </main>
  );
};

export default TaskList;
