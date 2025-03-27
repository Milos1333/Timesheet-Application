import { useState } from "react";
import "./App.css";
import Header from "./features/header/Header";
import TaskList from "./features/tasks/TaskList";
import Footer from "./features/footer/Footer";
import ModalComponent from "./components/modalComponent/ModalComponent";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = (title, hours) => {
    const totalHours = tasks.reduce((sum, task) => sum + Number(task.hours), 0);

    if (totalHours + Number(hours) > 24) {
      return;
    }

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
      <ModalComponent
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        addTask={addTask}
        totalHours={tasks.reduce((sum, task) => sum + Number(task.hours), 0)}
      />
    </div>
  );
};

export default App;
