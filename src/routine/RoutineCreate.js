import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
// import "../routine/routine.css"
import APIURL from '../helpers/environment';


class RoutineCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            cleanser:'',
            exfoliant:'',
            moisturizer:'',
            result:''
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
        console.log(this.props.token)
        fetch(`${APIURL}/skin/create`, {
            method: 'POST', 
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }) .then((res) => res.json())
          .then((logData) => {
            this.props.updateRoutinesArray();
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
                
                    <formgroup>
                        <Label for="cleanser">Cleanser</Label>
                        <Input id="Cleanser" type="text" name="cleanser" value={this.state.cleanser} placeholder="cleanser" onChange={this.handleChange} />
                        <br/>
                        <br/>
                        <Label for="exfoliant">Exfoliant</Label>
                        <Input id="Exfoliant" type="text" name="exfoliant" value={this.state.exfoliant} placeholder="exfoliant" onChange=
                        {this.handleChange} />
                        <br/>
                        <br/>
                        <Label for="moisturizer">Moisturizer</Label>
                        <Input id="moisturizer" type="text" name="moisturizer" value={this.state.moisturizer} placeholder="moisturizer" onChange={this.handleChange} />
                        <br/>
                        <br/>
                        <Label for="result">Result</Label>
                        <Input id="result" type="result" name="result" value={this.state.results} placeholder="enter results" onChange={this.handleChange} />
                        <br/>
                        <br/>
                    </formgroup>
                
                    <Button type="submit" color="primary">Create Routine</Button>
                </Form>
               
            </div>
            
        )
    }
}
export default RoutineCreate;