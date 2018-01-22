import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import './chart.css';

class Chart extends Component {

  render() {
    const { schools, favorites } = this.props;
    let chartData = {};
    let schoolName = "";

    if (schools) {
      favorites.forEach( el => {
        if (el.school_id == schools.school_id) {
          schoolName = el.school_name;
        }
      });
      const americanIndainAlaskanNative = schools.female_ai_an_count + schools.male_ai_an_count;
      const asian = schools.female_asian_count + schools.male_asian_count;
      const blackAfricanAmerican = schools.female_b_aa_count + schools.male_b_aa_count;
      const hispanicLatino = schools.female_h_l_count + schools.male_h_l_count;
      const multiRacial = schools.female_multi_racial_count + schools.male_multi_racial_count;
      const nativeHawiaanOrPacificIslander = schools.female_nh_opi_count + schools.male_nh_opi_count;
      const white = schools.female_white_count + schools.male_white_count;
      const divideBy = americanIndainAlaskanNative + asian + blackAfricanAmerican + hispanicLatino + multiRacial + nativeHawiaanOrPacificIslander + white;

      chartData = {
        datasets: [{
            data: [(americanIndainAlaskanNative / divideBy) * 100, (asian / divideBy) * 100, (blackAfricanAmerican / divideBy) * 100, (hispanicLatino / divideBy) * 100, (multiRacial / divideBy) * 100, (nativeHawiaanOrPacificIslander / divideBy) * 100, (white / divideBy) * 100],
            backgroundColor: ['blue', 'green', 'purple', '#cc207f', 'yellow', 'cyan', 'coral']
        }],


        labels: ['American Indain or Alaskan Native', 'Asian', 'Black African-American', 'Hispanic Latino', 'Multi Racial', 'Native Hawiaan Or Pacific Islander', 'White']
      };
    }

    return (
      <div className='chart-container'>
        <h2 className='chart-title'>{ schoolName }</h2>
    { schools ? < Pie data={ chartData } /> : <h2>Sorry, there is no population data for these schools</h2> }
      </div>
    );
  }
}

export default Chart;
