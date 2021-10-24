import React, { Component } from 'react';
import store from '../store';

const axios = require('axios');

class AddTodo extends Component {
    state = {
        id: "",
        isDone: "",
        todoDescription: "",
        todoFinishDate: ""
    }

    componentDidMount() {

    }

    handleChange = (e) => {
        //Updating local component state
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        //Clear existing value in input
        document.getElementById("todoValue").value = "";

        //Updating local component state
        this.setState({ value: "" });
    }

    addTodo = () => {

        const data = {
            todoDescription: this.state.value,
            todoFinishDate: 'today',
            isDone: false
        };




        axios.post('http://localhost:8080/dropwizard-mongodb-ms/todo/save', data)
            .then(response => {
                console.log(response);
                store.dispatch({ type: 'todos/todoAdded', payload: data })
            }
            );
        this.clearInput();
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="todoValue" placeholder="ToDo" onChange={this.handleChange} />
                <div className="input-group-append">
                    <button onClick={this.addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
                </div>
            </div>
        );
    }
}

export default AddTodo;