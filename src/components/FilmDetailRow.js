import React, { Component } from 'react';

class FilmDetailRow extends Component {

  render() {
    return (
      <tr className="detailRow">
        <td>{this.props.children}</td>
        <td>showtimes</td>
      </tr>
    );
  }

}

export default FilmDetailRow;
