import React, { Component } from 'react';
import FilmsTable from '../components/FilmsTable'

class FilmListBox extends Component {

  constructor() {
    super();

    this.state = {
      films: [
        {id: 1, name: 'Moana'},
        {id: 2, name: 'Trolls'},
        {id: 3, name: 'How to Train your Dragon'},
        {id: 4, name: 'Monsters Inc'},
        {id: 5, name: 'Boss Baby'},
        {id: 6, name: 'Zootropolis'},
      ]
    }
  }

  render() {
    return (
      <div>
        <h1 className='title-box'>UK Opening This Week</h1>
        <div className='showtimes'>
          <FilmsTable films={this.state.films}/>
        </div>
        <div className='See-more-opening-times'>See more opening times here >></div>
        <div className='button-div'>
          <button className='button'>Get Showtimes</button>
        </div>
      </div>
    )
  }

}

export default FilmListBox;
