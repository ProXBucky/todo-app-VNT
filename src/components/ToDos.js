import React from "react";
import TodoItems from "./ToDoItems";

class ToDos extends React.Component {
    render() {
        return (
            <ul className="todos-container">
                {this.props.todos.map(todo => (
                    <TodoItems key={todo.id} todo={todo}
                        handleChange={this.props.handleChange}
                        deleteToDo={this.props.deleteToDo} />
                ))}
            </ul>
        )
    }
}

export default ToDos;