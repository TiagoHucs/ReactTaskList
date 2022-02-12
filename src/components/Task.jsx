import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";

import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
    return (
        <div className="task-container" style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>{task.title}</div>
            <div >
                <button className="task-btn" onClick={() => console.log(task)}>
                    <CgInfo />
                </button>
                <button className="task-btn" onClick={() => handleTaskDelete(task.id)}>
                    <CgClose />
                </button>
            </div>
        </div>
    )
}

export default Task;