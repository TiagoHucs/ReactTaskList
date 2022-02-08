import React, { useState } from "react";
import Tasks from "./components/Tasks";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id:'1',
      title: 'Estudar',
      completed: true
    },
    {
      id:'2',
      title: 'Jogar',
      completed: false
    }
  ]);
  return (
    <div className="container">
      <button>Add task</button>
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App;
