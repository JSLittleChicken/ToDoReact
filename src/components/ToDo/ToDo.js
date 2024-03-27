import { useState } from "react";
import React from "react";
import TaskList from "../TaskList/TaskList";
import ToDoForm from "../ToDoForm/ToDoForm";

const data = [
    {
        name: 'Сходити за покупками',
        isDone: true,
        id: 1
    },
    {
        name: 'Зробити домашнє завдання',
        isDone: false,
        id: 2
    },
    {
        name: 'Погратися з котом',
        isDone: true,
        id: 3
    },
    {
        name: 'Тренування',
        isDone: false,
        id: 4
    }]

export default function ToDo(props) {

    const [tasks, setTasks] = useState(data);

    function addTask(name) {
        setTasks(prev => {
            return [...prev, { name: name, isDone: false, id: Math.max(...tasks.map(t => t.id)) + 1 }];
        });
    }

    function toggleDone(id, isDone) {
        setTasks([...tasks].map(task => task.id === id ? { ...task, isDone: isDone } : task));
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <TaskList key='list' tasks={tasks} toggleDone={toggleDone}/>
            <ToDoForm key='form' addTask={addTask}/>
        </div>
    )
}
