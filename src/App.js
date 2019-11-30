import React from 'react';
import { Component } from 'react'; 
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './components/Home';
import Login from'./components/Login';
import News from'./components/News';
import history from './components/history'

class App extends Component{
  render(){
    
      return (
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/news" component={News}/>
          </Switch>
        </Router>
      );

}
}

export default App;
