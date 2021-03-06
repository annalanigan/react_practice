import React, { Component } from 'react';
import FilmsTable from '../components/FilmsTable'
import Button from '../components/ShowButton'

class FilmListBox extends Component {

  constructor() {
    super();

    this.state = {
      films: [
        {id: 1, name: 'Moana', logo:'moana.png'},
        {id: 2, name: 'Trolls', logo:'trolls.png'},
        {id: 3, name: 'How to Train your Dragon', logo:'dragon.png'},
        {id: 4, name: 'Monsters Inc', logo:'monsters.png'},
        {id: 5, name: 'Boss Baby', logo:'baby.png'},
        {id: 6, name: 'Zootropolis', logo:'zootropolis.png'},
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
          <Button className='Showtimes'/>
        </div>
      </div>
    )
  }

}

export default FilmListBox;
