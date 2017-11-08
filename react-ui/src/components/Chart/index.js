import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class Chart extends Component {

  render() {
    console.log('props in chart ', this.props);
    const chart1data = this.props.schools[0];
    const chart2data = this.props.schools[1];

    console.log('chart data 1', chart1data);
    console.log('chart data 2', chart2data);
    let chartData = {};

    if (chart1data && chart2data) {
      const americanIndainAlaskanNative = chart1data.female_ai_an_count + chart1data.male_ai_an_count;
      const asian = chart1data.female_asian_count + chart1data.male_asian_count;
      const blackAfricanAmerican = chart1data.female_b_aa_count + chart1data.male_b_aa_count;
      const hispanicLatino = chart1data.female_h_l_count + chart1data.male_h_l_count;
      const multiRacial = chart1data.female_multi_racial_count + chart1data.male_multi_racial_count;
      const nativeHawiaanOrPacificIslander = chart1data.female_nh_opi_count + chart1data.male_nh_opi_count;
      const white = chart1data.female_white_count + chart1data.male_white_count;
      const divideBy = americanIndainAlaskanNative + asian + blackAfricanAmerican + hispanicLatino + multiRacial + nativeHawiaanOrPacificIslander + white
      
      console.log('divdeby ', asian / divideBy);
      
      chartData = {
        datasets: [{
            data: [(americanIndainAlaskanNative / divideBy) * 100, (asian / divideBy) * 100, (blackAfricanAmerican / divideBy) * 100, (hispanicLatino / divideBy) * 100, (multiRacial / divideBy) * 100, (nativeHawiaanOrPacificIslander / divideBy) * 100, (white / divideBy) * 100],
            backgroundColor: ['blue', 'green', 'purple', 'orange', 'yellow', 'cyan', 'coral']
        }],
    
        
        labels: ['American Indain or Alaskan Native', 'Asian', 'Black African-American', 'Hispanic Latino', 'Multi Racial', 'Native Hawiaan Or Pacific Islander', 'White']
      };
    }

    return (
      <div className='chart-container'>
        < Pie data={ chartData } />
      </div>
    );
  }
}

export default Chart;