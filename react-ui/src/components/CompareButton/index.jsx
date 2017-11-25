import React, { Component } from 'react';
import './compare-button-styles.css';

class compareButton extends Component {
  constructor() {
    super()
    this.state = {
      isSelected: false
    }
  }

  // isSelected() {
  //   let favIDs = []
  //   this.props.favorites.forEach(fav => favIDs.push(fav.school_code))
  //   if (favIDs.includes(this.props.schoolInfo.dps_school_code)) {
  //     return true;
  //   } else return false;
  // }

  render () {

    return (
      <div>
        <button className='compare-button' onClick={ () => console.log(this.props) }>Compare</button>
      </div>
    )
  }
};

export default compareButton;
//
// <button className='compare-button' onClick={ () => props.getPopulation(school_id) }>Compare</button>
