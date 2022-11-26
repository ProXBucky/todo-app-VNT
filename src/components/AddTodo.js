import React from "react";

class AddTodo extends React.Component {
    state = {
        title: ""
    }

    // Gán title vào input value
    onHandleChange = e => {
        this.setState({
            title: e.target.value
        });
    }

    // set title vào addToDo
    addToDo = e => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({
            title: ""
        })
    }


    render() {
        return (
            <form className="form-container" onSubmit={this.addToDo}>
                <input type="text"
                    className="input-text"
                    placeholder="Add to do..."
                    value={this.state.title}
                    onChange={this.onHandleChange}
                />
                <input type="submit" className="input-submit" value="Submit" />
            </form>
        )
    }
}

export default AddTodo;