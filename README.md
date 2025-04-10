# Timesheet Application

This application is a **Timesheet Management System** built using **React**. It helps users to track daily tasks by logging the hours spent on them and viewing these tasks based on the selected date from the URL. Additionally, it displays a random motivational quote each time the user refreshes the page.

## Features

- **Create Timesheet Item**: Users can create new timesheet entries by specifying a title and hours. The "Create" button is disabled until both fields are filled. 
- **Maximum Hours Per Day**: Users cannot exceed the configured maximum hours (default 24 hours) for a single day.
- **Random Motivational Quote**: Each time the page is loaded or refreshed, a random motivational quote is shown with the author.
- **Dynamic Date**: The application allows users to view and manage tasks for a specific date through the URL parameter (e.g., `http://localhost:3000/13-5-2022`).
- **Edit & Delete Tasks**: Users can edit or remove existing tasks.
  
## Technologies Used

- **ReactJS**: For building the user interface.
- **React Router**: For navigation between different dates and pages.
- **Ant Design**: For displaying messages (e.g., success or error) to the user.
- **JSON Server**: Used for simulating a backend and storing data (tasks, etc.).
- **CSS**: For styling the application.

## Setup Instructions

Follow these steps to get your project running locally:

### 1. Clone the Repository

Clone this repository to your local machine:
git clone https://github.com/yourusername/timesheet-app.git

### 2. Install Dependencies

Navigate to the project folder and install the dependencies:
cd timesheet-app
npm install

### 3. Start JSON Server (for Backend Simulation)

In a separate terminal, start the JSON server to simulate backend API:
npm run server
The server will run on http://localhost:5000, and you can modify the endpoints as needed.

### 4. Start the React Application

In another terminal window, run the React application:
npm run dev
The app will be available at http://localhost:3000.

## Application Flow

    Homepage: When the user first visits the app, they will be redirected to the current date’s timesheet.

    Create a Task: Users can click the "Add Task" button to create a new task by specifying the task title and hours worked.

    Edit & Remove Tasks: Users can edit or delete existing tasks from their timesheet.

    Quote Display: Every time the user refreshes the page, a random motivational quote is displayed along with the author.

## Date Management

You can view tasks for a specific date by entering the date as a URL parameter:

http://localhost:3000/13-5-2022

This will load the tasks for the specified date. The app will fetch the tasks dynamically based on the date parameter.
Task Management

    Create: Add new tasks by specifying the title and hours spent.

    Edit: Modify the details of an existing task.

    Delete: Remove tasks from the timesheet.

## Quotes Management

The quotes are fetched from a static JSON file. A random quote is shown whenever the page is loaded or refreshed.
API Endpoints

    GET /tasks: Fetch all tasks.

    POST /tasks: Create a new task.

    PUT /tasks/:id: Update an existing task by ID.

    DELETE /tasks/:id: Delete a task by ID.

## API Service

The application communicates with a mock API using JSON Server to simulate backend operations for CRUD tasks. Here is how the service works:

    ApiService.fetchTasks(): Fetches all tasks.

    ApiService.createTask(task): Creates a new task.

    ApiService.updateTask(task): Updates an existing task.

    ApiService.deleteTask(id): Deletes a task by its ID.

## Motivational Quotes

Quotes are stored in a static JSON file and are shown randomly on page load. You can modify the quotes list by editing the JSON file directly.

## Author
Milos Klepic
