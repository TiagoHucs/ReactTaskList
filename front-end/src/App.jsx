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
  const API = 'http://localhost:3333/tasks'

  useEffect(()=>{
    get();
  },[]);


  const handleTaskAddition = (taskTitle) => {
    const newTask = {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    };

    axios.post(API, newTask)
    .then(function (response) {
      get();
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const get = async () => {
    const {data} = await axios.get(API);
    setTasks(data);
  }

  const handleTaskClick = (taskId) => {
    axios.patch(`${API}/${taskId}`,{ completed: true})
    .then(function (response) {
      get();
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const handleTaskDelete = (taskId) => {
    axios.delete(`${API}/${taskId}`)
    .then(function (response) {
      get();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <img src="./logo-title.png" className="center"/>
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
