//import React, { Component } from 'react';
import React from 'react';

/*
// 此处正确，下面用了无状态组件形式
export default class Header extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <h1>Header</h1>
            </div>
          </div>
        </div>
    );
  }
}
*/

// React创建组件方式三 ———— 无状态组件/函数式组件（没有生命周期）
const Header = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-1 col-xs-offset-11">
          <h1>Header</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;


/*
// React创建组件方式一 ———— ES5: React.createClass

import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.refs.item.value);
  },

  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo {...this.props} key={key} i={i}post />)}
      </div>
    )
  }
})
*/

/*
React中组件的写法有三种：
（1）ES5: React.createClass
接收一个对象参数，对象中必须包含一个render()，返回一个组件实例，用以创建有状态组件，并被实例化，可以访问组件生命周期方法
存在问题：自动绑定函数方法，导致不必要性能开销（比如，React会自动处理函数this指针，使用ES6写法时this指针失效，因而采用“bind(this)”）

（2）ES6: React.Component
官方推荐的创建组件的方式，适于创建有状态组件

（3）无状态函数式/纯组件
适用场景：
1.无需state，即不处理用户输入，组件的所有数据都依赖props传入
2.不需要用到生命周期函数

好处：
1.不需要声明类，可以避免大量诸如“extends”、“constructor”之类的代码
2.不需要显示声明this关键字，在ES6的类声明中往往需要将函数的this关键字绑定到当前作用域，而因为函数式声明的特性，我们不需要再强制绑定

高阶组件：hoc（返回组件的组件/函数，用以处理React无状态组件添加状态）
Redux管理数据源和状态，利用Redux后，所有负责展示的组件均可采用无状态函数式写法

const HigherOrderComponent = (WrappedComponent) => {
  return class WrapperComponent extends Component{
    render() {
      // do something with WrappedComponent
    }
  }
}

*/