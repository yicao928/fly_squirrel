import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
        <p>BODY PART</p>
      </body>
    </div>
  );
}

export default App;
