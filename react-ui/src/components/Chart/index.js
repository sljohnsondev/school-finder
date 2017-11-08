import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class Chart extends Component {

  render() {
    console.log('props in chart ', this.props);
    const chart1data = this.props.schools[0];
    const chart2data = this.props.schools[1];

    console.log('chart data 1', chart1data);
    console.log('chart data 2', chart2data);
    
    const data = {
      datasets: [{
          data: [25, 20, 30, 20, 5]
      }],
  
      labels: [
          'Red',
          'Yellow',
          'Blue',
          'Orange',
          'Purple'
      ]
  };

    return (
      <div className='chart-container'>
        < Pie data={data} />
      </div>
    );
  }
}

export default Chart;