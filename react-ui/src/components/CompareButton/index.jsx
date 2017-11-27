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

  addSchool(school) {
    this.setState({ isSelected: true }, () => {
      this.props.selectCompare(school)
    })
  }

  removeSchool(id) {
    this.setState({ isSelected: false }, () => {
      console.log('remove')
      this.props.removeCompare(id)
    })
  }

  render () {
    const { id, schoolInfo } = this.props;

    return (
      <div>
        {
          this.state.isSelected ?
          <button className='compare-button selected' onClick={ () => this.removeSchool(id)}>Compare</button>
          :
          <button className='compare-button' onClick={ () => this.addSchool(schoolInfo) }>Compare</button>
        }
      </div>
    )
  }
};

export default compareButton;
//
// <button className='compare-button' onClick={ () => props.getPopulation(school_id) }>Compare</button>
