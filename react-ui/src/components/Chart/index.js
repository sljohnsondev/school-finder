import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import './chart.css';

class Chart extends Component {

  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  componentWillMount() {
    let americanIndainAlaskanNative, asian, blackAfricanAmerican, hispanicLatino, multiRacial, nativeHawiaanOrPacificIslander, white, divideBy;

    console.log('CHART PROPS ', this.props)

    fetch(`https://cdoe-data-api.herokuapp.com/api/v1/school/${this.props.school.school_id}/population`)
    .then( response => response.json())
    .then( schoolMetric => {
      const school = schoolMetric[0];
      americanIndainAlaskanNative = school.female_ai_an_count + school.male_ai_an_count;
      asian = school.female_asian_count + school.male_asian_count;
      blackAfricanAmerican = school.female_b_aa_count + school.male_b_aa_count;
      hispanicLatino = school.female_h_l_count + school.male_h_l_count;
      multiRacial = school.female_multi_racial_count + school.male_multi_racial_count;
      nativeHawiaanOrPacificIslander = school.female_nh_opi_count + school.male_nh_opi_count;
      white = school.female_white_count + school.male_white_count;
      divideBy = americanIndainAlaskanNative + asian + blackAfricanAmerican + hispanicLatino + multiRacial + nativeHawiaanOrPacificIslander + white;
      this.setState({ chartData: {
        datasets: [{
          data: [(americanIndainAlaskanNative / divideBy) * 100, (asian / divideBy) * 100, (blackAfricanAmerican / divideBy) * 100, (hispanicLatino / divideBy) * 100, (multiRacial / divideBy) * 100, (nativeHawiaanOrPacificIslander / divideBy) * 100, (white / divideBy) * 100],
          backgroundColor: ['blue', 'green', 'purple', '#cc207f', 'yellow', 'cyan', 'coral']
        }],
        labels: ['American Indain or Alaskan Native', 'Asian', 'Black African-American', 'Hispanic Latino', 'Multi Racial', 'Native Hawiaan Or Pacific Islander', 'White']
        }
      });
    })
    .catch( error => error);
  }

  render() {
    return (
      <div className='chart-container'>
        <h2 className='chart-title'>{ this.props.school.school_name }</h2>
        { this.state.chartData ? <Pie data={ this.state.chartData } /> : <h2>Sorry, there is no population data for these schools</h2> }
      </div>
    );
  }
}

export default Chart;
