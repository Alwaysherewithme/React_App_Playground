import React, { Component } from 'react';

import Header2 from './components/Header';
import Home from './components/Home';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" title="React!" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, please edit <code>src/App.js</code> and save to reload.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <Header2 />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <h1>Alwayshere!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <Home />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
