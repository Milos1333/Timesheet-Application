import { useState, useEffect } from "react";
import "./App.css";
import Header from "./features/header/Header";
import TaskList from "./features/tasks/TaskList";
import Footer from "./features/footer/Footer";
import ModalComponent from "./components/modalComponent/ModalComponent";
import ApiService from "./core/ApiService";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = async (title, hours) => {
    const totalHours = tasks.reduce((sum, task) => sum + Number(task.hours), 0);

    if (totalHours + Number(hours) > 24) {
      return;
    }

    const newId =
      tasks.length > 0
        ? String(Math.max(...tasks.map((task) => Number(task.id))) + 1)
        : "1";

    const newTask = { id: newId, title, hours };

    const createdTask = await ApiService.createTask(newTask);
    if (createdTask) {
      setTasks([...tasks, createdTask]);
      setIsModalOpen(false);
    }
  };

  const removeTask = async (id) => {
    await ApiService.deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    const fetchAllTasks = async () => {
      const fetchedTasks = await ApiService.fetchTasks();
      setTasks(fetchedTasks);
    };
    fetchAllTasks();
  }, []);

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
