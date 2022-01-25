import React, { Component } from 'react'
import "./Counter.css";

class Counter extends Component{

    // define the initial state in the constructor

    constructor() {
        super();
        this.state = {
            counter: 0
       }

       this.increment = this.increment.bind(this); 
    }

    render() {
        return (
            <div className="Counter">
              <button onClick={this.increment}>+1</button>
              <span className="count">{this.state.counter}</span>
            </div>
          );
    }

    increment(){ // update the state
        this.setState({
            counter: this.state.counter + 1
        });
    }
  }



export default Counter;
