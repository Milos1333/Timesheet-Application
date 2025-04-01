const BASE_URL = "http://localhost:5000";

const ApiService = {
  createTask: async (task) => {
    try {
      const response = await fetch(`${BASE_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating task:", error);
      return null;
    }
  },

  fetchTasks: async () => {
    try {
      const response = await fetch(`${BASE_URL}/tasks`);
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  },

  deleteTask: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      return true;
    } catch (error) {
      console.error("Error deleting task:", error);
      return false;
    }
  },

  // Metoda za izmene zadatka
  updateTask: async (task) => {
    try {
      const response = await fetch(`${BASE_URL}/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      return await response.json(); // Vraća ažurirani zadatak
    } catch (error) {
      console.error("Error updating task:", error);
      return null;
    }
  },
};

export default ApiService;
