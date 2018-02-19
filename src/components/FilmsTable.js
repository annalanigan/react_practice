import React, { Component } from 'react';
import DetailRow from './FilmDetailRow'

class FilmsTable extends Component {

  render() {

    const mappedFilms = this.props.films.map (film => {
      return (
        <DetailRow key={film.id}>
          {film.name}
        </DetailRow>
      )
    })

    return (
      <div className='filmList'>
      {mappedFilms}
      </div>
    )
  }

}

export default FilmsTable;
