import React from 'react';
import './Home.css';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:'11111'
        }
    }

    render(){
        return(
        <div>
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
        </header>
            <div className="search">
            <input type="search bar" placeholder="seacrhing"/> 
            </div>
            
            </div>
        );
    }
}

export default Home;