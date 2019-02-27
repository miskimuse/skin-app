import React, {Component} from 'react';
import RoutineCreate from './RoutineCreate';
import {Container, Row, Col} from 'reactstrap';
import RoutineTable from './RoutineTable';
import RoutineEdit from './RoutineEdit';
import APIURL from '../helpers/environment';

class RoutineIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            routines: [],
            updatePressed: false,
            routineToUpdate: {}
        }
    }
componentWillMount() {
    this.fetchRoutines()
}
    fetchRoutines = () => {
        fetch(`${APIURL}/skin/`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }) .then( (res) => res.json())
           .then((logData) => {
               return this.setState({routines: logData})
           })
    }

    routineDelete = (event) => {
        fetch(`${APIURL}/skin/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({log: {id: event.target.id}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then((res) => this.fetchRoutines())
    }

    routineUpdate = (event, routine) => {
        console.log(event, routine)
        fetch(`${APIURL}/skin/${routine.id}`, {
            method: 'PUT',
            body: JSON.stringify({log: routine}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }) .then((res) => {
            this.setState({updatePressed: false})
            this.fetchRoutines();
        })
    }

    setUpdatedRoutine = (event, routine) => {
        this.setState({
            routineToUpdate: routine,
            updatePressed: true
        })
    }

    componentDidMount(){
        this.fetchRoutines()
    }

    render(){
        const routines = this.state.routines.length >= 1 ? 
        <RoutineTable routines={this.state.routines} delete={this.routineDelete} update={this.setUpdatedRoutine}/> : 
        <h2>Log a routine to see data</h2>

        return(
            <Container>
                <Row>
                    <Col md='3'>
                        <RoutineCreate token={this.props.sessionToken} updateRoutinesArray={this.fetchRoutines}/>
                    </Col>
                    <Col md='9'>
                        {routines}
                    </Col>
                    <Col md="12">
                    {
                        this.state.updatePressed ? <RoutineEdit t={this.state.updatePressed} update={this.routineUpdate} routine={this.state.routineToUpdate} /> : <div></div>
                    }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default RoutineIndex;