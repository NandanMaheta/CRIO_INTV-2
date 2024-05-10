import React, { Component } from "react";

export default class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  Inc = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  Dec = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render() {
    return (
      <>
        <h1>Counter App</h1>
        <div>Count: {this.state.count}</div>
        <div>
          <button onClick={this.Inc}>Increment</button>
          <button onClick={this.Dec}>Decrement</button>
        </div>
      </>
    );
  }
}
