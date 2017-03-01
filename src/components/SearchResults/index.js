import React, { Component } from 'react';
import './searchresults-style.css';

export default class SearchResults extends Component {

  toggleSchoolSelect() {
    this.props.selectSchool(this.props.schoolData)
  }

  render() {
    let { Name, Address, WebUrl, commute } = this.props.schoolData
    return (
      <div className={this.props.selectedSchool === Name ? 'school-container selected' : 'school-container'} onClick={() => this.toggleSchoolSelect()}>
        <h3 className='results-fields'>{Name}</h3>
        <p className='results-fields'>{Address}</p>
        <a href={WebUrl} className='school-url results-fields' target='_blank'>School Website</a>
        <section className='commute-info results-fields'>
          <h4 className='results-fields'>Commuted Time: {commute.time}</h4>
          <h4 className='results-fields'>Commuted Distance: {commute.distance}</h4>
        </section>
      </div>
    )
  }
}

//{this.props.schoolData.GradeLevels} {this.props.schoolData.SchoolTypeDescription}
