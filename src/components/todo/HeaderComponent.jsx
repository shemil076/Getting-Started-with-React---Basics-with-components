import React, { Component } from 'react';
import AuthenticationService from "./AuthenticationService.js"
import {Link} from 'react-router-dom';

class HeaderComponent extends Component {
    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark text-white">
                    <div><a className="navbar-brand">in28minutes</a></div>
                    <ul className="navbar-nav ">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todo</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end ">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="logout" onClick={AuthenticationService.logOutSuccessfulLogin}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent;