import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { createContext } from 'react';
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"


// we have two types of components
// 1 sfc=> statel ess funcional component
// 2 class based component

class App extends Component {
  state = { 
    firstName:'Martin',
    phone:'22323'
   }
  render() { 
    return (  <div>
      {/* <Home /> */}

      <About />

      <Contact />




    </div>);
  }
}
 
export default App; 