/* eslint-disable no-alert, react/prefer-stateless-function */
import React, { Component } from 'react';
import { toggleTabView, hideComponent } from '../Helpers/tabControls';
import filterContainer from '../../containers/Filters-container';
import SchoolCard from '../../components/SchoolCard';
import Chart from '../Chart';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './compare-style.css';

const options = [
  { value: 'school_population', label: 'School Population' },
  { value: 'graduation_ge', label: 'Graduation by Gender/Ethnicity' },
  { value: 'graduation_ipst', label: 'Graduation by Instructional Program Service Type' }
]

class Compare extends Component {

  constructor() {
    super();
    this.state = {
      dropDown: 'school_population'
    }
    this.changeDropdown = this.changeDropdown.bind(this)
  }

  changeDropdown(val) {
    this.setState({ dropDown: val.value })
  }

  displaySchoolInfo(school) {
    console.log(school)
    if (school) {
      return <SchoolCard school={ school } />
    } else return (<div>Please select a school to compare.</div>)
  }

  render() {
    const { tab, toggleTab, comparedSchools, favorites } = this.props;
    const hideCompare = hideComponent(tab, 'compare');
    const buttonText = tab === 'compare' ?
      (
        <div className="compare-tab-container">
          <p>Compare</p>
          <img className="down-arrow" />
        </div>
      )
      :
      (
        <div className="compare-tab-container">
          <p>Compare</p>
          <img className="up-arrow" />
        </div>
      );

    return (
      <div>
        <button
          className={hideCompare ? 'slide-compare-btn hidden-compare' : 'slide-compare-btn'}
          onClick={() => toggleTabView(tab, toggleTab, 'compare')}
        >
          { buttonText }
        </button>
        <div className={ hideCompare ? 'compare-container hidden-compare' : 'compare-container'}>
          <section className='school-metrics-container'>
            <Select
              name="school-metric-dropdown"
              value={this.state.dropDown}
              options={options}
              onChange={this.changeDropdown}
              closeOnSelect={true}
            />
            <div className='school-metrics'>
              { this.displaySchoolInfo(comparedSchools[0]) }
              <Chart schools={ comparedSchools[0] } favorites={ favorites } />
            </div>
            <div className='school-metrics'>
              { this.displaySchoolInfo(comparedSchools[1]) }
              <Chart schools={ comparedSchools[1] } favorites={ favorites } />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default filterContainer(Compare);
