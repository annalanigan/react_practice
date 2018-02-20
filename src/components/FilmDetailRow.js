import React, { Component } from 'react';

class FilmDetailRow extends Component {

  render() {
    return (
      <thead>
      <tr className="detailRow">
        <td>{this.props.children}</td>
        <td>showtimes</td>
      </tr>
      </thead>
    );
  }

}

export default FilmDetailRow;
