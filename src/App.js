import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       My hello world
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        My hello world
        <FirstComponet/>
        <SecondComponet/>
        <ThirdComponet/>
        <FourthComponet/>
      
      </div>
    );
  }
}


class FirstComponet extends Component {
  render() {
    return (
      <div className="FirstComponet">
        FirstComponet
      </div>
    );
  }
}


class SecondComponet extends Component {
  render(){
    return(
      <div className="SecondComponet">
         SecondComponet
      </div>
    );
  }
}

function ThirdComponet(){
  return (
    <div className="ThirdComponet">
      third component
    </div>
  );
}

function FourthComponet() {
  return (
    <div className="FourthComponet">
      This is the fourth component
    </div>
  );
}

export default App;
