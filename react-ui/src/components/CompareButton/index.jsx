import React, { Component } from 'react';
import './compare-button-styles.css';

class compareButton extends Component {
  constructor() {
    super()
    this.state = {
      isSelected: false
    }
  }

  addSchool(school) {
    this.setState({ isSelected: true }, () => {
      this.props.selectCompare(school)
    })
    console.log(this.props.comparedSchools)
  }

  removeSchool(id) {
    this.setState({ isSelected: false }, () => {
      console.log('remove')
      this.props.removeCompare(id)
    })
    console.log(this.props.comparedSchools)
  }

  render () {
    const { id, schoolInfo } = this.props;

    return (
      <div>
        {
          this.state.isSelected ?
          <button className='compare-button selected' onClick={ () => this.removeSchool(id)}>Compare</button>
          :
          <button
            disabled={ this.props.comparedSchools.length >= 2 ? true : false }
            className='compare-button'
            onClick={ () => this.addSchool(schoolInfo) }
          >Compare</button>
        }
      </div>
    )
  }
};

export default compareButton;
