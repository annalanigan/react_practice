import React, { Component } from 'react';

class FilmDetailRow extends Component {

  render() {
    return (
      <div>
        <h4>{this.props.children}</h4>
        <p>showtimes</p>
      </div>
    );
  }

}

export default FilmDetailRow;
