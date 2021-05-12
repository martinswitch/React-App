import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { createContext } from 'react';
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import {Route,Switch,Router} from "react-router-dom"


// we have two types of components
// 1 sfc=> statel ess funcional component
// 2 class based component

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;