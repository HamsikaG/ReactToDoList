import React, { Component } from 'react';

class Todo extends Component {

    render() {
        return (
            <React.Fragment >
                <div style={{ width: 10 }} className="text-center">
                    {this.props.index}
                </div>
                <div style={{ width: 15 }} className="text-center">
                    <input type="checkbox" defaultChecked={this.props.todo.isDone} onChange={() => this.props.fooDoneDone(this.props.todo)} />
                </div>
                <div>
                    {
                        this.renderTodo()
                    }
                </div>
                <div style={{ width: 100 }} className="text-center">
                    <button onClick={() => this.props.fooDelete(this.props.todo)} className="btn btn-danger btn-sm">Delete</button>
                </div>
            </React.Fragment>
        );
    }

    renderTodo() {
        if (this.props.todo.id) {
            if (this.props.todo.isDone)
                return <s>{this.props.todo.todoDescription}{this.props.todo.todoFinishDate}</s>;
            else
                return <>{this.props.todo.todoDescription} {this.props.todo.todoFinishDate}</>;
        }

    }

}

export default Todo;