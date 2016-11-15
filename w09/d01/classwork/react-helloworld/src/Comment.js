import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <h5>- {this.props.author}</h5>
      </div>

    );
  }
}

export default Comment;
