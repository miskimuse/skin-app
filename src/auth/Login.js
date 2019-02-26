import React, {Component} from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from './helpers/environment';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/user/signin`,{
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }) .then((response) => response.json()
        ) .then((data) => {
            console.log(data)
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <h6></h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label></Label> 
                        <Input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label></Label> 
                        <Input id="li_username" type="text" name="email" placeholder="enter email" onChange={this.handleChange}
                    FormGroup></Input>
                        <Label></Label>
                        <br/>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit">Welcome back!</Button>
                </Form>
            </div>
        )
    }
}

export default Login;