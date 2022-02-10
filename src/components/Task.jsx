import React from "react";

import './Task.css';

const Task = ({ task, handleTaskClick }) => {
    return (
        <div
            className="task-container"
            onClick={() => handleTaskClick(task.id)}
            style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
            {task.title}
        </div>
    )
    //return <div className="task-container">{task.id}<br/> {task.title} <br/>{task.completed}</div>
}

export default Task;