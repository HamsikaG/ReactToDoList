import React, { Component } from 'react';
import store from '../store';
import { Card } from 'react-bootstrap';

const axios = require('axios');

class AddTodo extends Component {


    handleDescriptionChange = (e) => {
        //Updating local component state
        this.setState({
            description: e.target.value
        });
    }

    handleDateChange = (e) => {
        //Updating local component state
        this.setState({
            date: e.target.value
        });
    }
    clearInput = () => {
        //Clear existing value in input
        document.getElementById("todoValue").value = "";
        document.getElementById("todoDateValue").value = "";
        //Updating local component state
        this.setState({ description: "" });
        this.setState({ date: "" });
    }

    addTodo = () => {
        const data = {
            todoDescription: this.state.description,
            todoFinishDate: this.state.date,
            isDone: false
        };

        axios.post('http://localhost:8080/dropwizard-mongodb-ms/taskManager/save', data)
            .then(response => {
                console.log(response);
                store.dispatch({ type: 'todos/todoAdded', payload: response.data })
            }
            );
        this.clearInput();
    }

    render() {
        return (
            <Card>
                <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
                    <div style={{ textAlign: "left" }}>
                        <h3>Description</h3>
                        <input type="text" className="form-control" id="todoValue" placeholder="Task" onChange={this.handleDescriptionChange} />
                    </div>
                    <div style={{ textAlign: "left", paddingTop: 15 }}>
                        <h3>Date</h3>
                        <input type="text" className="form-control" id="todoDateValue" placeholder="Due Date" onChange={this.handleDateChange} />
                    </div>
                    <div style={{ textAlign: "right", padding: 15 }}>
                        <button onClick={this.addTodo} className="btn btn-success" type="button" id="button-addon2">Save</button>
                    </div>
                </div>
            </Card>

        );
    }
}

export default AddTodo;