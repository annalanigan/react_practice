import React, { Component } from 'react';

class FilmDetailRow extends Component {

  render() {
    return (
      <tr className="detailRow">
        <td><img src={this.props.logo} alt="" width='50px'></img></td>
        <td>{this.props.children}</td>
        <td>showtimes</td>
      </tr>
    );
  }

}

export default FilmDetailRow;
