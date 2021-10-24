import React from 'react';
import { connect } from 'react-redux';
import Todo from './todo';
import AddTodo from './addtodo';
import store from '../store';
import { Button, Card, Form } from 'react-bootstrap';

const axios = require('axios');


class Todos extends React.Component {

    constructor(props) {
        super(props);
    }

    handleDelete(todo) {
        axios.delete(`http://localhost:8080/dropwizard-mongodb-ms/taskManager/remove/${todo.id}`)
            .then(response => {
                console.log(response);
                store.dispatch({ type: 'todos/todoDeleted', payload: todo });
            }
            );

    }

    handleDone = (todo) => {
        todo.isDone = !todo.isDone;
        axios.post('http://localhost:8080/dropwizard-mongodb-ms/taskManager/update', todo)
            .then(response => {
                console.log(response);
                store.dispatch({ type: 'todos/todoToggled', payload: todo.id })
            });
    }

    render() {
        return (

            <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
                <div>
                    <div>
                        <div colSpan="4" className="text-center">
                            <AddTodo
                            />
                        </div>
                    </div>
                    <Card>
                        <div style={{ margin: 15 }}>

                            {this.props.todos.map((todo, index) => (
                                <div key={todo.id}>
                                    <Card>
                                        <Todo index={index + 1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </Card>

                </div>
            </div>



        )

    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(Todos);