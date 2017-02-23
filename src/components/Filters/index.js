import React, { Component } from 'react';
import { Link } from 'react-router';
import './filters-style.css';

export default class Filters extends Component {

  render() {
    return (
      <div className='filter-container'>
        <h2 className='filter-header'>Search Filters</h2>
        <div className='filter-fields'>
          Filter fields will go here
        </div>
        <button className='search-btn'>Submit</button>
      </div>
    )
  }
}
