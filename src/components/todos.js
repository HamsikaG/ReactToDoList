import React from 'react';
import { connect } from 'react-redux';
import Todo from './todo';
import AddTodo from './addtodo';
import store from '../store';
import { Card } from 'react-bootstrap';

const axios = require('axios');


class Todos extends React.Component {

    handleDelete(todo) {
        axios.delete(`http://localhost:8080/dropwizard-mongodb-ms/taskManager/${todo.id}`)
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
        const { todos } = this.props;
        return (
            <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
                <div>
                    <div>
                        <div colSpan="4" className="text-center">
                            <AddTodo
                            />
                        </div>
                    </div>
                    {todos.length > 0 ?
                        <Card>
                            <div style={{ margin: 15 }}>
                                {todos.map((todo, index) => (
                                    <div key={todo.id}>
                                        <Card>
                                            <Todo index={index + 1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        : null}
                </div>
            </div>



        )

    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(Todos);