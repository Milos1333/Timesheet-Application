import { useState, useEffect } from "react";
import "./App.css";
import Header from "./features/header/Header";
import TaskList from "./features/tasks/TaskList";
import Footer from "./features/footer/Footer";
import ModalComponentCreate from "./components/modalComponentCreate/ModalComponentCreate";
import ModalComponentEdit from "./components/modalComponentEdit/ModalComponentEdit";
import ApiService from "./core/ApiService";

const App = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const totalHours = tasks.reduce((sum, task) => sum + Number(task.hours), 0);

  useEffect(() => {
    const fetchAllTasks = async () => {
      const fetchedTasks = await ApiService.fetchTasks();
      setTasks(fetchedTasks);
    };
    fetchAllTasks();
  }, []);

  const addTask = async (title, hours) => {
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
      setIsCreateModalOpen(false);
    }
  };

  const removeTask = async (id) => {
    await ApiService.deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const openEditModal = (task) => {
    setCurrentTask(task);
    setIsEditModalOpen(true);
  };

  const saveChanges = async (updatedTask) => {
    const response = await ApiService.updateTask(updatedTask);
    if (response) {
      const updatedTasks = tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setTasks(updatedTasks);
      setIsEditModalOpen(false);
    }
  };

  return (
    <div className="page-wrap">
      <Header
        isModalOpen={isCreateModalOpen}
        openModal={() => setIsCreateModalOpen(true)}
        closeModal={() => setIsCreateModalOpen(false)}
        addTask={addTask}
      />

      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        openEditModal={openEditModal}
      />

      <Footer />

      <ModalComponentCreate
        isModalOpen={isCreateModalOpen}
        closeModal={() => setIsCreateModalOpen(false)}
        addTask={addTask}
        totalHours={totalHours}
      />

      <ModalComponentEdit
        isModalOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
        saveChanges={saveChanges}
        currentTask={currentTask}
        totalHours={totalHours}
      />
    </div>
  );
};

export default App;
