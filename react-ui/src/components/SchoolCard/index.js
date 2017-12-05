import React from 'react';
import FavoriteButton from '../../containers/FavoriteButton-container';
import CompareButton from '../../containers/CompareButton-container';
import './school-card.css';

const SchoolCard = (props) => {

  const { school_name, school_address, commute_time, commute_distance, website, id, school_id } = props.school

  return (
    <div className="school-card-container">

      <section className='main-school-info'>
        <h1 className="school-name">{ school_name }</h1>
        <p className='results-fields'>{ school_address }</p>
        <a href={ website } className='school-url results-fields' target='_blank'>School Website</a>
      </section>
      <section className='commute-info-container'>
        <h4>Commute Time</h4>
        <p className='commute-info'>{ commute_time }</p>
        <h4>Commute Distance</h4> 
        <p className='commute-info'>{ commute_distance }</p>
      </section>
      <section className='buttons-container'>
        <FavoriteButton id={ id } schoolInfo={ props.school } />
        <CompareButton id={ id } schoolInfo={ props.school } />
      </section>

    </div>
  );
};

export default SchoolCard;
