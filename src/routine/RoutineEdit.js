import React from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

class RoutineEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cleanser: '',
            exfoliant: '',
            moisturizer: '',
            result: ''
        }
    }

    componentWillMount(){
        this.setState({
            cleanser: this.props.routine.cleanser,
            exfoliant: this.props.routine.exfoliant,
            moisturizer: this.props.routine.moisturizer,
            result: this.props.routine.result,
            id: this.props.routine.id
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.props)
        event.preventDefault();
        this.props.update(event, this.state);
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Log a Routine</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="result">Result</Label>
                                <Input id="result" type="text" name="result" value={this.state.result} placeholder="enter result" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="def">Type</Label>
                                <Input type="select" name="definition" id="definition" value={this.state.definition} onChange={this.handleChange} placeholder="Type">
                                    <option></option>
                                    <option value="Cleaser">Cleanser</option>
                                    <option value="Exfoliant">Exfoliant</option>
                                    <option value="Moisturizer">Moisturizer</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Notes</Label>
                                <Input id="description" type="text" name="description" value={this.state.description} placeholder="enter description" onChange={this.handleChange}/>
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default RoutineEdit;