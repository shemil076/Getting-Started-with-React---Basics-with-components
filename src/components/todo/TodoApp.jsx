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
                            <Route path="/logout" element={<LogoutComponent />} />
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
           <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark text-white">
                   <div><a className="navbar-brand">in28minutes</a></div>
                   <ul className="navbar-nav ">
                       <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                       <li><Link className="nav-link" to="/todos">Todo</Link></li>
                   </ul>
                   <ul className="navbar-nav navbar-collapse justify-content-end ">
                       <li><Link className="nav-link" to="/login">Login</Link></li>
                       <li><Link className="nav-link" to="logout">Logout</Link></li>
                   </ul>
               </nav>
           </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2022 </span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank you for using our application.
                </div>
            </div>
        )
    }
}


function ErrorComponent() {
    return <div>Error Occurred</div>
}
export default TodoApp;
