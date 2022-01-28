import React, { Component } from 'react';
import AuthenticationService from "./AuthenticationService.js"

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
        // if (
        //     this.state.username == "in28minutes" &&
        //     this.state.password == "dummy"
        // ) {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.navigate(`/welcome/${this.state.username}`)
        //     // this.setState({ hasLoginSuccess: true });
        //     // this.setState({ hasLoginFail: false });
        // } else {
        //     this.setState({ hasLoginSuccess: false });
        //     this.setState({ hasLoginFail: true });
        // }
        AuthenticationService.executeBasicAthenticationService(this.state.username, this.state.password)
        .then(
            () => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.navigate(`/welcome/${this.state.username}`)
            }
        )
        .catch(
            () => {
                this.setState({ hasLoginSuccess: false });
            this.setState({ hasLoginFail: true });
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFail && <div className="alert-warning">Invalid credentials</div>}
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
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }
}

export default LoginComponent;