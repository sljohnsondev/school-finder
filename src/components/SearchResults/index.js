import React, { Component } from 'react';

export default class SearchResults extends Component {

  render() {

    return (
      <div className='school-container'>
        <h4 className='filter-fields'>{this.props.schoolData.Name}</h4>
        <p>Siiiick info about school...</p>
      </div>
    )
  }
}
