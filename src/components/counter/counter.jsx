import React, { Component } from 'react'
import './Counter.css'
function Counter(){
    return (
      <div className="Counter">
        <button onClick={increment}>+1</button>
        <span className="Counter">0</span>
      </div>
    );
  }

function increment(){
    console.log("increment");
}


export default Counter;