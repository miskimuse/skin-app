import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './auth.css';
//import APIURL from './helpers/environment';


class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true
        }
    }

    viewConductor = () => {
        if (this.state.login === true) {
            return <Login setToken={this.props.setToken} />
        } else {
            return <Signup setToken={this.props.setToken}/>
        }
    }

    toggle = () => {
        let _login = !this.state.login
        this.setState({login:_login})

    } 
    render() {
        let display = this.viewConductor()
        return (
            <Container className="auth-container">
                <Row>
                    <Col>
                        {display}
                    </Col>
                </Row>
                <button onClick={this.toggle}>
                    toggle
                </button>
            </Container>
        )
    }
}

export default Auth;