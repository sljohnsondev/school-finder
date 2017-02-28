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
        <h3 className='filter-fields'>{Name}</h3>
        <p>{Address}</p>
        <a href={WebUrl} className='school-url' target='_blank'>School Website</a>
        <section className='commute-info'>
          <p>Commuted Time: TBD</p>
          <p>Commuted Distance: TBD</p>
        </section>
      </div>
    )
  }
}
