import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import test from './component/test'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
class App extends Component {

  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact="exact" path='/' component={test} />
      </Switch>
      </BrowserRouter>      
     
      </div>
    );
  }
}

export default App;
