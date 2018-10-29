import React, { Fragment, Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Header2 from './components/Header';
import Home from './components/Home';

import Menu from './components/MenuComponent';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      headerLink: "Header-Link"
    }
  }

  onGreet_wm() {
    alert("子组件Home向父组件App通信……")
  }

  onPost_wm(age) {
    alert("父组件App接收到子组件Home传来的age："+age)
  }

  onChangeHeaderLink_wm(newHeaderLink) {
    this.setState({
      headerLink: newHeaderLink
    })
  }

  render() {
    const user = {
      name: "App组件内定义的对象user-name",
      hobbies: ["Sports", "Reading", "Travel"]
    }

    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" title="React!" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, please edit <code>src/App.js</code> and save to reload.
          </p>
        </div>

        <div>
          <p>Front-End JavaScript Frameworks and Libraries: An Introduction</p>
        </div>

        <div className="">
        <h2>Configure React Application</h2>
        <p>Following steps show how to configure React application to make use of both 
        Bootstrap CSS classes and also Reactstrap, which is the React, the components based 
        re-implementation of Bootstrap's JavaScript components. And so we are making use of that 
        within our application to construct the various views that we will render in browser.</p>
          <div>
            <h3>Configure your React Project to use Reactstrap</h3>
            <code>yarn add bootstrap@4.0.0
            yarn add reactstrap@5.0.0
            yarn add react-popper@0.9.2</code>
          </div>
          <div>
            <h3>Configure to use Bootstrap 4</h3>
            <code>import 'bootstrap/dist/css/bootstrap.min.css';</code>
          </div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Adding a Bootstrap Navigation Bar</NavbarBrand>
            </div>
          </Navbar>
        </div>

        <Menu />

        <div>
          <h2>State</h2>
          <p>(1) Each component can store its own local information in its "state":<br />
--Private and fully controlled by the component<br />
--Can be passed as props to children<br /><br />
(2) Only class components can have local state<br />
(3) Other kind of React components, we don't need to store state and we can simplify the 
component declaration significantly.<br />
(4) Never directly manipulate the state property values, use setState instead.</p>
          <h2>Props</h2>
          <p>(1) JSX attributes are passed into a component as a single object:<br />
--Available in the component as "props"<br />
--Can pass in multiple attributes<br />
--Cannot modify props within the component<br />
(2) Examples:<br />
&lt;Menu dishes={this.state.dishes} /&gt;<br />
- Here the dishes are available as props within the Menu Component and can be accessed as this.props.dishes
<p></p>
&lt;Dishdetail dish={this.state.dish} comments={this.state.comments} /&gt;<br />
- Here dish is available as props within the Dishdetail Component and can be accessed as this.props.dish, and comments as this.props.comments
</p>
          <h2>Handing Events</h2>
          <p>Handling events is similar to the way you handle events on DOM elements:<br />
- Use camelCase to specify events<br />
- Pass function as the event handler<br />
{/* Example: &lt;Card onClick={()=>this.onDishSelect(dish)}&gt; */}
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <Header2 homeLink="Home-Link" headerLink={this.state.headerLink} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <h1>Alwayshere!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <Home name={"Home组件-name"} initialAge_wm={16} user={user} 
                greet={this.onGreet_wm} post={this.onPost_wm} changeLink={this.onChangeHeaderLink_wm.bind(this)}>
              {/* 上行不使用this.onGreet_wm.bind(this)是因为onGreet_wm()中没用到this */}
                <div>
                  <i>&lt;Home&gt;组件的子组件1</i>
                  <b>&lt;Home&gt;组件的字组件2</b>
                </div>
              </Home>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
