import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class WelcomeComponent extends Component {

    constructor(props) {
        super(props);

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    }
    render() {
        return (
            <div>
                <h1>welcome</h1>

                <div className="container">
                    Welcome {this.props.params.name}. 
                    You can manage your todos <Link to="/todos">here</Link>
                </div>

                <div className="container">
                   Click here to get a customised welcome message
                    <button onClick={this.retrieveWelcomeMessage} 
                        className="btn btn-success">Get Welcome Message
                    </button>
                </div>

            </div>
        )
    }

    retrieveWelcomeMessage(){

    }
}

export default WelcomeComponent;