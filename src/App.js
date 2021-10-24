import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos';
import store from './store';
const axios = require('axios');

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:8080/dropwizard-mongodb-ms/taskManager/todos')
      .then(response => {
        console.log(response);
        store.dispatch({ type: 'todos/populateTodos', payload: response });
      }
      );
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Add Task</h1>
        <Todos />
      </div>
    );
  }
}

export default App;