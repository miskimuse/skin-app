import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import "../routine/routine.css"
import APIURL from '../helpers/environment';


class RoutineCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            cleanser:'test',
            exfoliant:'test',
            moisturizer:'test',
            result:'test'
        };
    }

    handleChange = (event) => {
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/skin`, {
            method: 'POST', 
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }) .then((res) => res.json())
          .then((logData) => {
            //   this.props.updateRoutineArray();
              this.setState({
                  cleanser: '',
                  exfoliant: '',
                  moisturizer: '',
                  result: ''
              })
          })
    }

    render(){
        return(
            <div className = "routine">
                <h3>Log Your Skin Routine</h3>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="result">Result</Label>
                        <Input id="result" type="text" name="result" value={this.state.result} placeholder="enter result" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="definition">Type</Label>
                        <Input type="select" name="definition" id="definition" value={this.state.definition} onChange={this.handleChange} placeholder="Type">
                            <option></option>
                            <option value="Cleanser">Cleanser</option>
                            <option value="Exfoliant">Exfoliant</option>
                            <option value="Moisturizer">Moisturizer</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Notes</Label>
                        <Input id="description" type="text" name="description" value={this.state.description} placeholder="enter description" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}
export default RoutineCreate;