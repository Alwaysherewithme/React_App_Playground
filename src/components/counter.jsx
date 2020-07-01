import React, { Component } from "react"; // imrc

class Counter extends Component {
  // cc
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: '10px',
    fontWeight: 'bold'
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  renderTags() {
    if(this.state.tags.length === 0) return <p>There are no tags!</p>;
    return <ul>{ this.state.tags.map(tag => <li key={ tag }>{ tag }</li>)}</ul>;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 30 }}>Hello!</span>
        <span className={ this.getBadgeClasses() }>World</span>
        <span style={ this.styles } className="badge badge-primary m-2">{ this.formatCount() }</span>
        <button className="btn btn-secondary btn-sm">Increasement</button>
        { this.state.tags.length === 0 && "Please create a new tag!" }
        { this.renderTags() }
      </React.Fragment>
    )
  }
}

export default Counter;
