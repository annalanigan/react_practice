import React, { Component } from 'react';

class ShowButton extends Component {

  clickIt() {
    console.log("Clicked the Button");
  }

  render() {
    return (
      <div>
        <button className='button' onClick={this.clickIt}>{this.props.className}</button>
      </div>
    )
  }

}

export default ShowButton;
