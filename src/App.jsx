import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./features/header/Header";
import TaskList from "./features/tasks/TaskList";
import Footer from "./features/footer/Footer";
import ModalComponentCreate from "./components/modalComponentCreate/ModalComponentCreate";
import ModalComponentEdit from "./components/modalComponentEdit/ModalComponentEdit";
import ApiService from "./core/ApiService";
import RedirectToToday from "./components/redirectToToday/RedirectToToday";
import { useEffect, useState } from "react";
import { message } from "antd";

const App = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const fetchAllTasks = async () => {
      const fetchedTasks = await ApiService.fetchTasks();
      setTasks(fetchedTasks);
    };
    fetchAllTasks();
  }, []);

  const addTask = async (title, hours) => {
    const parsedHours = Number(hours);

    const totalHoursForSelectedDate = tasks
      .filter((task) => task.date === selectedDate)
      .reduce((sum, task) => sum + Number(task.hours), 0);

    if (totalHoursForSelectedDate + parsedHours > 24) {
      return;
    }

    const newId =
      tasks.length > 0
        ? String(Math.max(...tasks.map((task) => Number(task.id))) + 1)
        : "1";

    const newTask = { id: newId, title, hours, date: selectedDate };

    const createdTask = await ApiService.createTask(newTask);
    if (createdTask) {
      setTasks([...tasks, createdTask]);
      setIsCreateModalOpen(false);
      messageApi.success("Task successfully created!");
    }
  };

  const removeTask = async (id) => {
    await ApiService.deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    messageApi.success("Task successfully deleted!");
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
      messageApi.success("Task successfully edited!");
    }
  };

  return (
    <div className="page-wrap">
      {contextHolder}
      <Header
        isModalOpen={isCreateModalOpen}
        openModal={() => setIsCreateModalOpen(true)}
        closeModal={() => setIsCreateModalOpen(false)}
        addTask={addTask}
        selectedDate={selectedDate}
        tasks={tasks}
      />
      <BrowserRouter basename="/Timesheet-Application">
        <Routes>
          <Route path="/" element={<RedirectToToday />} />

          <Route
            path="/:date"
            element={
              <TaskList
                tasks={tasks}
                removeTask={removeTask}
                openEditModal={openEditModal}
                onDateChange={setSelectedDate}
              />
            }
          />
        </Routes>
      </BrowserRouter>

      <ModalComponentCreate
        isModalOpen={isCreateModalOpen}
        closeModal={() => setIsCreateModalOpen(false)}
        addTask={addTask}
        selectedDate={selectedDate}
        tasks={tasks}
      />

      <ModalComponentEdit
        isModalOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
        saveChanges={saveChanges}
        currentTask={currentTask}
        tasks={tasks}
        selectedDate={selectedDate}
      />

      <Footer />
    </div>
  );
};

export default App;
