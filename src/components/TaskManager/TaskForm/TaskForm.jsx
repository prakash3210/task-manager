import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

function TaskForm(props){

    function handleSubmit(e){
        e.preventDefault();
        console.log("Your data is getting submitted.")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input id="title" />
            </FormGroup>

            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" id="description" rows="5" cols="30" />
            </FormGroup>
            
            <Button color="primary" size="sm">Add</Button>
        </Form>
    )
}

export default TaskForm