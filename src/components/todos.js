import React from 'react';
import { useSelector } from 'react-redux';

import Todo from './todo';
import AddTodo from './addtodo';
import store from '../store';
const axios = require('axios');

const selectTodos = state => state.todos

const Todos = () => {
    const todos = useSelector(selectTodos);
    const handleDelete = todo => {
        axios.post('http://localhost:8080/todo/remove', todo)
            .then(response => {
                console.log(response);
                store.dispatch({ type: 'todos/todoDeleted', payload: todo });
            }
            );


    }

    const handleDone = todo => {
        todo = {
            ...todo,
            isDone: !todo.isDone
        }
        axios.post('http://localhost:8080/todo/update', todo)
            .then(response => {
                console.log(response);
                store.dispatch({ type: 'todos/todoToggled', payload: todo.id })
            });
    }


    return (
        <div className="table">
            <div>
                {todos.map((todo, index) => (
                    <div key={todo.id}>
                        <Todo index={index + 1} todo={todo} fooDelete={handleDelete} fooDoneDone={handleDone} />
                    </div>
                ))}
                <div>
                    <div colSpan="4" className="text-center">
                        <AddTodo
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todos;