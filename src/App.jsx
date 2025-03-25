import { useState } from "react";
import "./App.css";
import Header from "./features/header/Header";
import TaskList from "./features/tasks/TaskList";
import Footer from "./features/footer/Footer";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = (title, hours) => {
    const newTask = { title, hours };
    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="page-wrap">
      <Header
        isModalOpen={isModalOpen}
        openModal={() => setIsModalOpen(true)}
        closeModal={() => setIsModalOpen(false)}
        addTask={addTask}
      />
      <TaskList tasks={tasks} removeTask={removeTask} />
      <Footer />
    </div>
  );
};

export default App;
