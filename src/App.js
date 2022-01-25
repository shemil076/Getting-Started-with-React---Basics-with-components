import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learingExamples/FirstComponent';
import SecondComponent from './components/learingExamples/SecondComponent';
import ThirdComponent from './components/learingExamples/ThirdComponent';

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
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>      
      </div>
    );
  }
}


export default App;
