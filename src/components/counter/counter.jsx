import React, { Component } from 'react'
import "./Counter.css";
import PropTypes from "prop-types";

class Counter extends Component{

    // define the initial state in the constructor

    constructor() {
        super();
        this.state = {
            counter: 0
       }

       this.increment = this.increment.bind(this);  // binding is not nessary with arrow fuctions
    }

    render  () { 
        return (
            <div className="Counter">
              <button onClick={this.increment}>+{this.props.by}</button>
              <span className="count">{this.state.counter}</span>
            </div>
          );
    }

     // binding is not nessary with arrow fuctions
    increment ()  { // update the state
        this.setState({
            counter: this.state.counter + this.props.by
            // counter: this.state.counter + parseInt(this.props.by)
        });
    }
  }


  Counter.defaultProps = {
      by: 1
  }

  Counter.prototype = {
      by: PropTypes.number
  }

export default Counter;
