import React from "react";

import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
    return (
        <div className="task-container" style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>{task.title}</div>
            <div className="task-remove-btn" onClick={() => handleTaskDelete(task.id)}>X</div>
        </div>
    )
}

export default Task;