import React, {Component} from 'react';

class Hello extends Component {
  render() {
    // This points to the instance of the class 'Hello'
    console.log(this.props);
    return (
      <h1>Hello, {this.props.name}. You are {this.props.age} years old.</h1>
    );
  }
}

export default Hello;
