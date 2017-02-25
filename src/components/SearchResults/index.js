import React from 'react';

const SearchResults = (props) => {
  return (
    <div className='school-container'>
      <h4 className='filter-fields'>{props.schoolData.Name}</h4>
      <p>Siiiick info about school...</p>
    </div>
  )
}

export default SearchResults;
