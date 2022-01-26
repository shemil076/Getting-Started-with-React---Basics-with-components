import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/welcome" element={<WelcomeComponent />} />
                    </Routes>
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
            this.setState({ hasLoginSuccess: true });
            this.setState({ hasLoginFail: false });
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

class WelcomeComponent extends Component {
    render() {
        return <div className="">welcome</div>;
    }
}

export default TodoApp;
