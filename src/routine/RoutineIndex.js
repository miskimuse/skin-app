import React, {Component} from 'react';
import WorkoutCreate from './WorkoutCreate';
import {Container, Row, Col} from 'reactstrap';
import RoutineTable from './RoutineTable';
import RoutineEdit from './RoutineEdit';
import APIURL from './helpers/environment';

class RoutineIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            routines: [],
            updatePressed: false,
            routineToUpdate: {}
        }
    }

    fetchWorkouts = () => {
        console.log(this.props.token, 'line 18 in routineindex');
        fetch(`${APIURL}/log`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
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
                'Authorization': this.props.token
            })
        })
        .then((res) => this.fetchRoutines())
    }

    routineUpdate = (event, routine) => {
        fetch(`${APIURL}/skin/${routine.id}`, {
            method: 'PUT',
            body: JSON.stringify({log: routine}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
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
        <WorkoutsTable routines={this.state.routines} delete={this.routineDelete} update={this.setUpdatedRoutine}/> : 
        <h2>Log a routine to see data</h2>

        return(
            <Container>
                <Row>
                    <Col md='3'>
                        <RoutineCreate token={this.props.token} updateRoutinesArray={this.fetchRoutines}/>
                    </Col>
                    <Col md='9'>
                        {routines}
                    </Col>
                    <Col md="12">
                    {
                        this.state.updatePressed ? <RoutinesEdit t={this.state.updatePressed} update={this.routineUpdate} routine={this.state.routineToUpdate} /> : <div></div>
                    }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default RoutineIndex;