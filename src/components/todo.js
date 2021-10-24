import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Todo extends Component {

    render() {
        return (
            <React.Fragment >

                <div style={{ display: "flex", flexDirection: "row", padding: 20, alignItems: "center" }}>
                    <div style={{ paddingRight: 30, alignItems: "left", flex: 1, }} className="text-center">
                        <input style={{ width: 20, height: 20, alignItems: "left" }} type="checkbox" defaultChecked={this.props.todo.isDone} onChange={() => this.props.fooDoneDone(this.props.todo)} />
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
            return <s> <div>
                {this.props.todo.todoDescription}
            </div>
                <div>
                    {this.props.todo.todoFinishDate}
                </div></s>;
        else
            return <div>
                <div>
                    {this.props.todo.todoDescription}
                </div>
                <div>
                    {this.props.todo.todoFinishDate}
                </div>
            </div>;


    }

}

export default Todo;