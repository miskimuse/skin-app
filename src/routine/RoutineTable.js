import React from 'react';
import {Table, Button} from 'reactstrap';

const RoutineTable = (props) => {
    return (
        <div>
            <h3>Routine History</h3>
            <hr/>
            <Table striped>
                <thead>
                    <tr>
                        <th>Cleanser</th>
                        <th>Exfoliant</th>
                        <th>Moisturizer</th>
                        <th>Result</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.routines.map((routine, id) => {
                            return (
                                <tr key={id}>
                                    <td scope="row">{routine.cleanser}</td>
                                    <td>{routine.exfoliant}</td>
                                    <td>{routine.moisturizer}</td>
                                    <td>{routine.result}</td>
                                    <td>
                                        <Button id={routine.id} onClick={props.delete} color="danger">Delete</Button>|
                                        <Button id={routine.id} onClick={e => props.update(e, routine)} color="warning">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default RoutineTable;
