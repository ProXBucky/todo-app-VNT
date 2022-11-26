import React, { useEffect, useState } from "react";
import Header from "../components/layouts/Header"
import ToDos from "./ToDos";
import AddTodo from "./AddTodo";
import Footer from "../store/containers/Footer"
import axios from "axios";


//____________________HOOK___________________//
function TodoApp(props) {
    const [state, setState] = useState({
        todos: []
    })
    const handleCheckboxChange = id => {
        setState({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    const deleteToDo = id => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => {
                console.log(response);
                setState({
                    todos: [
                        ...state.todos.filter(todo => {
                            return todo.id !== id;
                        })
                    ]
                })
            }
            );
    };

    const addToDo = title => {
        const todoData = {
            title: title,
            completed: false
        };
        axios
            .post("https://jsonplaceholder.typicode.com/todos", todoData)
            .then(response => {
                console.log(response.data);
                setState({
                    todos: [...state.todos, response.data]
                });
            });
    };

    useEffect(() => {
        const config = {
            params: {
                _limit: 5
            }
        }

        axios
            .get("https://jsonplaceholder.typicode.com/todos", config)
            .then(response => setState({ todos: response.data }));
    }, [])


    return (
        <div className="container">
            <Header />
            <AddTodo addToDo={addToDo} />
            <ToDos
                todos={state.todos}
                handleChange={handleCheckboxChange}
                deleteToDo={deleteToDo}
            />
            <Footer />
        </div>
    );

}


//________________class Component__________________//
// class TodoApp extends React.Component {
//     state = {
//         todos: []
//     };

//     handleCheckboxChange = id => {
//         this.setState({
//             todos: this.state.todos.map(todo => {
//                 if (todo.id === id) {
//                     todo.completed = !todo.completed;
//                 }
//                 return todo;
//             })
//         });
//     };

//     deleteToDo = id => {
//         axios
//             .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
//             .then(response => {
//                 console.log(response);
//                 this.setState({
//                     todos: [
//                         ...this.state.todos.filter(todo => {
//                             return todo.id !== id;
//                         })
//                     ]
//                 })
//             }
//             );
//     };

//     addToDo = title => {
//         const todoData = {
//             title: title,
//             completed: false
//         };
//         axios
//             .post("https://jsonplaceholder.typicode.com/todos", todoData)
//             .then(response => {
//                 console.log(response.data);
//                 this.setState({
//                     todos: [...this.state.todos, response.data]
//                 });
//             });
//     };

//     componentDidMount() {
//         const config = {
//             params: {
//                 _limit: 5
//             }
//         };
//         //tạo GET request để lấy danh sách todos
//         axios
//             .get("https://jsonplaceholder.typicode.com/todos", config)
//             .then(response => this.setState({ todos: response.data }));
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Header />
//                 <AddTodo addToDo={this.addToDo} />
//                 <ToDos
//                     todos={this.state.todos}
//                     handleChange={this.handleCheckboxChange}
//                     deleteToDo={this.deleteToDo}
//                 />
//             </div>
//         );
//     }
// }
export default TodoApp;
