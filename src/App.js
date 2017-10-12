import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Login from "./app/login";
import Reg from "./app/register";
import Home from "./app/components/home";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Reg}/>
        <Route path="/app" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
