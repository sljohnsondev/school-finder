import React, { Component } from 'react';
import './searchresults-style.css';

export default class SearchResults extends Component {

  constructor() {
    super()
    this.state ={
      selected: false
    }
  }

  toggleSchoolSelect() {
    this.setState({ selected: !this.state.selected })
  }

  render() {
    let { Name, Address, Phone, WebUrl } = this.props.schoolData
    return (
      <div className={this.state.selected ? 'school-container selected' : 'school-container'} onClick={() => this.toggleSchoolSelect()}>
        <h3 className='results-fields'>{Name}</h3>
        <p className='results-fields'>{Address}</p>
        <a href={WebUrl} className='school-url results-fields' target='_blank'>School Website</a>
        <section className='commute-info results-fields'>
          <p className='results-fields'>Commuted Time: TBD</p>
          <p className='results-fields'>Commuted Distance: TBD</p>
        </section>
      </div>
    )
  }
}
