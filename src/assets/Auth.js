import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './auth.css';


const Auth = (props) => {
    return (
        <body className body>
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup setToken={props.setToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
        </body>
    )
}

export default Auth;