import React from 'react';
import FavoriteButton from '../../containers/FavoriteButton-container';
import CompareButton from '../../containers/CompareButton-container';
import './school-card.css';

const SchoolCard = (props) => {

  const { school_name, school_address, commute_time, commute_distance, website, id, school_id } = props.school

  return (
    <div className="school-card-container">

      <h1 className="school-name">{ school_name }</h1>

      <p className='results-fields'>{ school_address }</p>
        <a href={ website } className='school-url results-fields' target='_blank'>School Website</a>
        <section className='commute-info results-fields'>
          <h4 className='fav-commute-data'>Commute Time: <span className='commute-info'>{ commute_time }</span></h4>
          <h4 className='fav-commute-data'>Commute Distance: <span className='commute-info'>{ commute_distance }</span></h4>
        </section>
      <div className='buttons'>
        <FavoriteButton id={ id } schoolInfo={ props.school } />
        <CompareButton id={ id } schoolInfo={ props.school } />
      </div>

    </div>
  );
};

export default SchoolCard;
