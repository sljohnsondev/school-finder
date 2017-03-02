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
        <h3 className='results-fields'>{Name}</h3>
        <p className='results-fields'>{Address}</p>
        <a href={WebUrl} className='school-url results-fields' target='_blank'>School Website</a>
        <section className='commute-info results-fields'>
          <h4 className='results-fields'>Commute Time: {commute.time.text}</h4>
          <h4 className='results-fields'>Commute Distance: {commute.distance.text}</h4>
        </section>
      </div>
    )
  }
}
