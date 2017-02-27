import React from 'react';

const Result = (props) => {
  return (
    <div className='school-container'>
      <h4 className='filter-fields'>{props.school.Name}</h4>
      <p>Siiiick info about school...</p>
    </div>
  )
}

export default Result;
