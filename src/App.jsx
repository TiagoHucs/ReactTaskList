import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  axios from "axios";
import Tasks from "./components/Tasks";
import './App.css';
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const fetchTasks = async () => {
      const {data} = await axios.get('http://localhost:3004/tasks');
      console.log(data);
      setTasks(data);
    }

    fetchTasks();
  },[]);


  const handleTaskAddition = (taskTitle) => {
    const newTask = {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    };

    //await axios.post('http://localhost:3004/tasks',newTask);

    const newTasks = [...tasks, newTask]
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
