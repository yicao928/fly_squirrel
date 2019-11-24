import React from 'react';
import { Component } from 'react'; 
import './App.css';
import Home from './components/Home'

class App extends Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
           >
            Fly Squirral
          </a>
          <textarea className="Textarea">
          </textarea>
          <button className="User-button">
            <p>sign in</p>
          </button>
        </header>
        <body className="App-body">
          <Home></Home>
        </body>
      </div>
    );
  }
}

export default App;
