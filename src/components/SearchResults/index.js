import React, { Component } from 'react';
import './searchresults-style.css';

export default class SearchResults extends Component {

  toggleSchoolSelect() {
    if (this.props.schoolData.Name === this.props.selectedSchool) {
      this.props.selectSchool('');
    } else this.props.selectSchool(this.props.schoolData)
  }

  render() {
    let { Name, Address, WebUrl, commute } = this.props.schoolData;
    return (
      <div className={this.props.selectedSchool === Name ? 'school-container selected' : 'school-container'} onClick={() => this.toggleSchoolSelect()}>
        <h3 className='results-fields'>{`${refObj[this.props.refNum]}${Name}`}</h3>
        <p className='results-fields'>{Address}</p>
        <a href={WebUrl} className='school-url results-fields' target='_blank'>School Website</a>
        <section className='commute-info results-fields'>
          <h4 className='results-fields'>Commute Time: <span className='commute-info'>{commute.time.text}</span></h4>
          <h4 className='results-fields'>Commute Distance: <span className='commute-info'>{commute.distance.text}</span></h4>
        </section>
      </div>
    )
  }
}

let refObj = {
  0: 'A. ',
  1: 'B. ',
  2: 'C. ',
  3: 'D. ',
  4: 'E. ',
  5: 'F. ',
  6: 'G. ',
  7: 'H. ',
  8: 'I. '
}
