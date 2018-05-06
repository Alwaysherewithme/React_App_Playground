import React, { Component } from 'react';

import Header2 from './components/Header';
import Home from './components/Home';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  onGreet_wm() {
    alert("子组件Home向父组件App通信……")
  }

  onPost_wm(age) {
    alert("父组件App接收到子组件Home传来的age："+age)
  }

  render() {
    const user = {
      name: "App组件内定义的对象user-name",
      hobbies: ["Sports", "Reading", "Travel"]
    }

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
              <Home name={"Home组件-name"} initialAge_wm={16} user={user} greet={this.onGreet_wm} post={this.onPost_wm}>
              {/* 上行不使用this.onGreet_wm.bind(this)是因为onGreet_wm()中没用到this */}
                <div>
                  <i>&lt;Home&gt;组件的子组件1</i>
                  <b>&lt;Home&gt;组件的字组件2</b>
                </div>
              </Home>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
