import React, {Component} from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        fetch('http://localhost:3000/api/login',{
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }) .then(
            (response) => response.json()
        ) .then((data) => {
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
                        <Label for="username">Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="li_username" type="text" name="email" placeholder="enter email" onChange={this.handleChange}
                    FormGroup></Input>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit">Welcome back!</Button>
                </Form>
            </div>
        )
    }
}

export default Login;