import React, { Component } from 'react';
import { Link } from 'react-router';
import './settings-style.css';

export default class Filters extends Component {

  render() {
    return (
      <div>
        <h2 className='filter-header'>Search Filters</h2>
        <div className='filter-container'>
          Filter fields will go here
        </div>
        <button className='search-btn'>Submit</button>
      </div>
    )
  }
}
