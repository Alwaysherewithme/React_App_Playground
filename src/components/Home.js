import React, { Component } from 'react';
import PropTypes_wm from 'prop-types';

// React创建组件方式二 ———— ES6创建组件: React.Component
export default class Home extends Component {

  constructor(props) {
    super(props);
    //this.age = this.props.age;
    this.state = {
      age: props.initialAge_wm,
      status: 0
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    },3000)
  }

  onAddAges_wm() {
    //this.age += 3;
    this.setState({
      age: this.state.age+3
    })
    console.log(this);
  }

  handlePost_wm() {
    this.props.post(this.state.age)  // post(...)为父组件App传来的函数，age为子组件Home的state里的
  }

  render() {
    let content = "";
    if(true){
      content = "Condition is true caused by 'if' !";
    }

    console.log("Home组件中接收到父组件App组件传来的属性：");
    console.log(this.props);

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

              <h3>二、通过Props传递数据</h3>
              <h5>★ App组件属性传递给Home组件的属性</h5>
              <p>name: {this.props.name}; initialAge_wm: {this.props.initialAge_wm}</p>
              <h5>★ Home组件内定义的属性</h5>
              <p>age: {this.state.age}; status（刷新页面三秒后变成1，重新render()这个p标签，return之上的console.log()也再次执行了？）: {this.state.status}</p>
              { /*<button onClick={this.onAddAges_wm.bind(this)} className="btn btn-primary">
                    Make me 3 years older</button> // 正确写法，也可写成以下形式*/ }
              <button onClick={() => {this.onAddAges_wm()}} className="btn btn-primary">
                    Make me 3 years older</button>
              
              <p>hobbies:</p>
              <ul>
                {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
              </ul>
              <div>{this.props.children}</div>
              { /* <div>{this.props.children.map((item, i) => <div>{item}</div>)}</div> 
                  // 错误写法！this.props.children.map is not a function*/}
              
              <button onClick={this.props.greet} className="btn btn-default">Home calls App</button>
              <p></p>
              <button onClick={this.handlePost_wm.bind(this)} className="btn btn-default">Home posts data to App</button>
              {/* 上行使用了bind(this)是因为handlePost_wm()里用到了this */}
            </div>
          </div>
        </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes_wm.string,
  age: PropTypes_wm.number,
  user: PropTypes_wm.object,
  greet: PropTypes_wm.func,
  /*
  PropTypes_wm.array,
  PropTypes_wm.bool,
  PropTypes_wm.symbol
  */
  children: PropTypes_wm.element.isRequired
}