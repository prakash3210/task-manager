import React from 'react'
import { ListGroup } from 'reactstrap';
import Task from '../../../models/Task.js';

import TaskItem from './TaskItem/TaskItem.jsx'

function TaskList(props){

    const tasks = [
        new Task(1,"Learn React"),
        new Task(2,"Learn Redux"),
        new Task(3,"Learn NodeJS"),
        new Task(4,"Learn MongoDB")
    ];

    console.log(tasks);

    return (
        <ListGroup>
            {tasks.map(task => <TaskItem key={task.id} task={task}/>)}
        </ListGroup>
    )
}

export default TaskList