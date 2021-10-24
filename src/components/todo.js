import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

class Todo extends Component {

    render() {
        return (
            <React.Fragment >
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: 15, paddingRight: 30, alignItems: "left", flex: 1, }} className="text-center">
                        <input type="checkbox" defaultChecked={this.props.todo.isDone} onChange={() => this.props.fooDoneDone(this.props.todo)} />
                    </div>
                    <div style={{ flex: 6, width: 100, alignItems: "left" }}>{this.renderTodo()}</div>
                    <div style={{ width: 100, alignItems: "right" }} className="text-center">
                        <Button onClick={() => this.props.fooDelete(this.props.todo)} className="btn btn-danger btn-sm">Delete</Button>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    renderTodo() {

        if (this.props.todo.isDone)
            return <s>{this.props.todo.todoDescription}{this.props.todo.todoFinishDate}</s>;
        else
            return <>{this.props.todo.todoDescription} {this.props.todo.todoFinishDate}</>;


    }

}

export default Todo;