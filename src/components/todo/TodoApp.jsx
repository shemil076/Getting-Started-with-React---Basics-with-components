import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import withNavigation from "./WithNavigation";
import withParams from "./withParams";

class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                        <Routes>
                            <Route path="/" element={<LoginComponentWithNavigation />} />
                            <Route path="/login" element={<LoginComponentWithNavigation />} />
                            <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                            <Route path="/todos" element={<ListToDoComponent />} />
                            <Route path="*" element={<ErrorComponent />} />
                        </Routes>
                    <FooterComponent />
                </Router>

                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        );
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "in28minutes",
            password: "",
            hasLoginFail: false,
            hasLoginSuccess: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    loginClicked() {
        if (
            this.state.username == "in28minutes" &&
            this.state.password == "dummy"
        ) {
            this.props.navigate(`/welcome/${this.state.username}`)
            // this.setState({ hasLoginSuccess: true });
            // this.setState({ hasLoginFail: false });
        } else {
            this.setState({ hasLoginSuccess: false });
            this.setState({ hasLoginFail: true });
        }
    }

    render() {
        return (
            <div>
                {this.state.hasLoginFail && <div>Invalid credentials</div>}
                {this.state.hasLoginSuccess && <div>Login successful</div>}
                Usser Name :{" "}
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                Password :{" "}
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}
class ListToDoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, description: 'Learn Dance', done: false, targetDate: new Date() },
                { id: 2, description: 'Learn React', done: false, targetDate: new Date() },
                { id: 3, description: 'Visit', done: false, targetDate: new Date() }
            ]
        }
    }


    render() {
        return (
            <div>
                <h1>List Todo</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Target date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todos =>
                                    <tr>
                                        <td>{todos.id}</td>
                                        <td>{todos.description}</td>
                                        <td>{todos.done.toString()}</td>
                                        <td>{todos.targetDate.toString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>
            </div>
        )
    }
}



class HeaderComponent extends Component {
    render() {
        return (
            <div>
                Header <hr />
            </div>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <hr /> Footer
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>Error Occurred</div>
}
export default TodoApp;
