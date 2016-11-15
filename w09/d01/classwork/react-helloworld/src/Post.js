import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: 'This is a title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos inventore quam in ea, quaerat, reiciendis consequatur quia neque quos. Sunt cum obcaecati atque deserunt sed dolorum itaque voluptatem expedita dolorem!',
      comments: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit corrupti ipsum culpa minus inventore tempora vitae, obcaecati eos praesentium perferendis ipsa tempore asperiores rem, expedita at. Pariatur esse deleniti dolores.',
          author: 'Anon1'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit corrupti ipsum culpa minus inventore tempora vitae, obcaecati eos praesentium perferendis ipsa tempore asperiores rem, expedita at. Pariatur esse deleniti dolores.',
          author: 'Anon2'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit corrupti ipsum culpa minus inventore tempora vitae, obcaecati eos praesentium perferendis ipsa tempore asperiores rem, expedita at. Pariatur esse deleniti dolores.',
          author: 'Anon3'
        }
      ]
    }
  }

  render() {
    const comments = this.state.comments.map((comment, i) => {
      return (
        <Comment
          key={i}
          author={comment.author}
          text={comment.text}
        />
      );
    })
    return (
      <div>
        <h2>{this.state.title}</h2>
        <h3>By: {this.props.postAuthor}</h3>
        <p>{this.state.content}</p>
        <h4>Comment Section</h4>
        {comments}
      </div>
    );
  }
}

export default Post;
