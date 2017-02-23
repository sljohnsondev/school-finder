import React, { Component } from 'react';
import { Link } from 'react-router';
import './filters-style.css';

export default class Filters extends Component {
  constructor() {
    super()
    this.state = {
      gradeLevel: '',

    }
  }

  handleChange(evt) {
    this.setState({ gradeLevel: evt.target.value })
  }

  render() {
    return (
      <div className='filter-container'>
        <h2 className='filter-header'>Search Filters</h2>
        <div className='filter-fields'>
          <section className='filter-form'>
            <h4>Grade Level</h4>
            <select id='filter-grade-level' value={ this.state.gradeLevel } onChange={(e) => this.handleChange(e)}>
              <option value=''>Select Grade Level</option>
              <option value='ece-prek'>ECE/Pre-K</option>
              <option value='k-5'>K-5</option>
              <option value='6-8'>6-8</option>
              <option value='9-12'>9-12</option>
            </select>
          </section>
        </div>
        <button className='search-btn'>Submit</button>
      </div>
    )
  }
}
