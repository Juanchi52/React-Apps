import React from "react";
import "../stylesheets/taskForm.css";
import { useState } from 'react';
import {v4 as uuidv4} from "uuid";

function FormTask(props){

    const [input,setInput] = useState("");

    const manageChange = e => {
        setInput(e.target.value);
    };

    const manageDelivery = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(), //I generate un identificado unico 
            text: input,
            completed: false
        }

        props.onSubmit(newTask);
    };

    return (
        <form 
        className = "task-form"
        onSubmit={manageDelivery}>
            <input 
            className = "task-input"
            type = "text"
            placeholder = "Write your taks"
            name = "text"
            onChange={manageChange}
            />
            <button className = "task-button">
                Add Task
            </button>
        </form>
    );
}

export default FormTask;