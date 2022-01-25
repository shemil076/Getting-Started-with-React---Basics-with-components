import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
// import FirstComponent from './components/learingExamples/FirstComponent';
// import SecondComponent from './components/learingExamples/SecondComponent';
// import ThirdComponent from './components/learingExamples/ThirdComponent';
import Counter from './components/counter/Counter';

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
        {/* <Counter by="1"/>     
        <Counter by="5"/>  
        <Counter by="10"/>   */}

         <Counter/>
 
      </div >
    );
  }
}







export default App;
