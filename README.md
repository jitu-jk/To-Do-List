<h1 align="center">To-Do List Application</h1>
<p align="center">
  <a href="https://your-github-jitu-jk.github.io/To-Do-List/"><b>Live Site</b></a>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

A simple and efficient To-Do List application built using ReactJS, HTML5, CSS3, and JavaScript. This project demonstrates how to create a dynamic and interactive task management application with functionalities to add, view, edit, and delete tasks.

<p align="center">
  <img src="path-to-screenshot.png" alt="App Screenshot" />
</p>

<!-- FEATURES -->
## Features
- **Add Tasks**: Easily add tasks to your to-do list.
- **View Tasks**: View all tasks in an organized list.
- **Edit Tasks**: Edit tasks to keep your list updated.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Task Completion**: Mark tasks as completed without deleting them.
- **Persistent Storage**: Tasks are saved in local storage, ensuring they persist across sessions.

<!-- INSTALLATION -->
## Installation

### Prerequisites
Ensure you have Node.js and npm installed on your system.

### Steps
1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-github-username/todo-list-app.git
    ```

2. **Navigate to the project directory:**
    ```sh
    cd todo-list-app
    ```

3. **Install the dependencies:**
    ```sh
    npm install
    ```

4. **Start the application:**
    ```sh
    npm start
    ```

The application should now be running on `http://localhost:3000`.

<!-- USAGE -->
## Usage

To start using the application, simply open the local server in your browser and begin adding tasks. Use the edit and delete icons to manage your tasks effectively.

<!-- PROJECT STRUCTURE -->
## Project Structure

```bash
todo-list-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskList.js
│   │   └── ...
│   ├── features/
│   │   └── tasks/
│   │       ├── tasksSlice.js
│   │       └── ...
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
