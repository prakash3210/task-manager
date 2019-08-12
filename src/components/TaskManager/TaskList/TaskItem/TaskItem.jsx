import React from 'react'
import { ListGroupItem, Button } from 'reactstrap';

function TaskItem(props){
    console.log(props)
    return (
        <ListGroupItem>
            {props.task.title}
            <Button close />
        </ListGroupItem>
    )
}

export default TaskItem