import React, { Component } from 'react';
import TodoDataService from "../../api/todo/TodoDataService.js";
import AuthenticationService from "./AuthenticationService.js"

class ListToDoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                // { id: 1, description: 'Learn Dance', done: false, targetDate: new Date() },
                // { id: 2, description: 'Learn React', done: false, targetDate: new Date() },
                // { id: 3, description: 'Visit', done: false, targetDate: new Date() }
            ]
        }
    }

    componentDidMount(){
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveAllTodo(username)
        .then(
            response => {
                this.setState({
                    todos: response.data
                })
            }
        )
    }

    render() {
        return (
            <div>
                <h1>List Todo</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done</th>
                                <th>Target date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todos =>
                                        <tr key={todos.id}>
                                            <td>{todos.description}</td>
                                            <td>{todos.done.toString()}</td>
                                            <td>{todos.targetDate.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListToDoComponent;