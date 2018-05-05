import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    let content = "";
    if(true){
      content = "Condition is true caused by 'if' !";
    }
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <h1>Home</h1>
              <h3>一、表达式：</h3>
              <p>{ 1+2 }</p>
              <p>{ "String" }</p>
              <p>{ "{表达式}不能输出两行！" }</p>
              <p>{ content }</p>
              <p>{ false? "" : "Condition is false caused by '?:' !"}</p>
            </div>
          </div>
        </div>
    );
  }
}