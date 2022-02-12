import React from "react";
import "./TaskDetails.css";


import Button from "./Button";
import { Link, useParams } from "react-router-dom";

const TaskDetails = () => {
    const params = useParams();
    console.log(params)
    return <>
        <h2>{params.taskTitle}</h2>
        <div className="back-button-container">
        <Link to="/">
            <Button>Voltar</Button>
        </Link>
        </div>
        <div className="task-details-container">
            <p>O que temos que ter sempre em mente é que a mobilidade dos capitais internacionais estende o alcance e a importância das diretrizes de desenvolvimento para o futuro.</p>
        </div>
    </>
}

export default TaskDetails;