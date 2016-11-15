import React, { Component } from 'react';
import Post from './Post';
import './App.css';

class App extends Component {
  constructor() {
    // Gives us all the properties from react's component class
    super();

    this.state = {
      blogAuthour: 'Bobby'
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to my Blog!</h1>
        <Post postAuthor={this.state.blogAuthour}/>
      </div>
    );
  }
}

export default App;
