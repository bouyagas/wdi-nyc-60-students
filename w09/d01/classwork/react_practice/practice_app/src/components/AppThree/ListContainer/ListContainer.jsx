import React, { Component } from 'react';
import './ListContainer.css'

class Interests extends Component {
  render() {
    // Since we do not know how many interests were defined above, we will dynamically respond here
    const listOfInterests = this.props.interests.map((interest, i) => {
      return (
        <li key={i}>
          {interest}
        </li>
      );
    })
    return (
      <div>
        <h2>Interests:</h2>
        <ul>
          {listOfInterests}
        </ul>
      </div>
    )
  }
}

export default Interests;
