import React, {Component, Fragment} from 'react'
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'

class TaskForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            title: '',
            description: '',
            error: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.reset = this.reset.bind(this)
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log(this)

        if (this.state.title === '' || this.state.description === '') {
            this.setState({
                error: 'Form is Invalid'
            })
            
        } else {
            const data = {
                title: this.state.title,
                description: this.state.description
            }
            console.log(data) //TODO Make an api call here
            this.reset()
        }
        console.log("Your data is getting submitted.")
    }

    reset(){ //Resetting the form
        this.setState({
                error: '',
                title: '',
                description: ''
            })
    }

    handleChange (e){
        console.log(e.target.id, e.target.value)

        if(e.target.id === 'title'){
            this.setState({
                title: e.target.value
            })
        } 
        else if(e.target.id === 'description'){
            this.setState({
                description: e.target.value
            })
        }
    }

    render() {
    
    const {error, title, description} = this.state

    return (
        <Fragment>
        {error === '' ? '':<Alert id="err" color="danger">{error}</Alert> }
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input id="title" value={title} onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" value={description} id="description" rows="5" cols="30" onChange={this.handleChange}/>
            </FormGroup>
            
            <Button color="primary" size="sm">Add</Button>
        </Form>
        </Fragment>
    )
    }
}

export default TaskForm