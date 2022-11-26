import React from "react";


class TodoItems extends React.Component {
    render() {
        const { completed, id, title } = this.props.todo;
        return (
            <li className="todo-item">
                <input type="checkbox"
                    checked={this.props.todo.checked}
                    onChange={() => this.props.handleChange(id)}
                />
                <span className={completed ? "completed" : null}>
                    {title}
                </span>
                <button className="btn-style"
                    onClick={() => this.props.deleteToDo(id)}> X </button>
            </li>
        )
    }
}

export default TodoItems;