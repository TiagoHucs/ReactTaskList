import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Tasks from "./components/Tasks";
import './App.css';
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar',
      completed: true
    },
    {
      id: '2',
      title: 'Jogar',
      completed: false
    }
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]
    setTasks(newTasks);
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(t => {
      if (t.id === taskId) {
        return { ...t, completed: !t.completed };
      } else {
        return t;
      }
    })
    setTasks(newTasks);
  }

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(t => t.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <h1>Tarefas</h1>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDelete={handleTaskDelete} />
            </>
          } />
          <Route path="/:taskTitle" element={<TaskDetails/>}/>
        </Routes>
      </Router>
    </div>

  )
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
