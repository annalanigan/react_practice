import React, { Component } from 'react';
import DetailRow from './FilmDetailRow'

class FilmsTable extends Component {

  render() {

    const mappedFilms = this.props.films.map (film => {
      return (
        <DetailRow key={film.id} logo={film.logo}>
          {film.name}
        </DetailRow>
      )
    })

    return (
      <table className='filmList'>
      {mappedFilms}
    </table>
    )
  }

}

export default FilmsTable;
