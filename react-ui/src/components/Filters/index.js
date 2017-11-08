import React, { Component } from 'react';
import SearchResults from '../SearchResults';
import getGeoLocation from '../Helpers/getGeoLocation';
import googleDistanceMatrix from '../Helpers/googleDistanceMatrix';
import googleDirections from '../Helpers/googleDirections';
import filterContainer from '../../containers/Filters-container';
import AdvancedFilters from '../AdvancedFilters';
import SearchSpinner from '../SearchSpinner';
import { toggleTabView, hideComponent } from '../Helpers/tabControls';
import './filters-style.css';

class Filters extends Component {
  constructor() {
    super();
    this.state = {
      gradeLevel: '',
      schoolType: '',
      transitMode: 'DRIVING',
      commuteDist: 15,
      commuteTime: 30,
      mathScore: 0,
      scienceScore: 0,
      satScore: 0,
      studentTeacherRatio: 200,
      viewFilters: true,
      homeAddress: '',
      selectedSchool: '',
    };
    this.homeCallback = this.homeCallback.bind(this);
    this.selectSchool = this.selectSchool.bind(this);
    this.directionsCallback = this.directionsCallback.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getGoogleDistances(finalSchools, transitMode) {
    const dataLength = finalSchools.length;
    const count = Math.ceil(dataLength / 25);
    for (let i = 0; i < count; i++) {
      const begin = i * 25;
      const end = i * 25 + 25;
      const data = finalSchools.slice(begin, end);
      const callBack = (response) => {
        const { commuteDist, commuteTime } = this.state;
        const finalSchoolData = response.rows[0].elements.map((school, i) => (
          Object.assign({}, data[i], {
            commute: {
              distance: { text: school.distance.text, value: school.distance.value },
              time: { text: school.duration.text, value: school.duration.value },
            },
            showInfo: false,
          })
        ));
        this.props.setSchools(finalSchoolData, commuteTime, commuteDist);
      };
      googleDistanceMatrix(this.props.schoolResults.homeAddress, data, transitMode, callBack);
    }
    this.toggleFilterView();
  }

  homeCallback(homeAddressCoords, streetAddress) {
    this.props.setHomeAddress(homeAddressCoords);
    this.props.patchUser({ street_address: streetAddress }, this.props.CurrentUser.id);
    this.props.updateAddress(streetAddress);
  }
  schoolFetchBuilder() {
    let { gradeLevel, schoolType, mathScore, scienceScore, satScore, studentTeacherRatio } = this.state;

    if (gradeLevel == '1') {
      return fetch(`https://cdoe-data-api.herokuapp.com/api/v1/schools?type=${schoolType}&grade_levels=${gradeLevel}&stRatio=${studentTeacherRatio}`)
    }
    if (gradeLevel == '2' || gradeLevel == '3') {
      return fetch(`https://cdoe-data-api.herokuapp.com/api/v1/schools?type=${schoolType}&grade_levels=${gradeLevel}&stRatio=${studentTeacherRatio}&mathRate=${mathScore}&scienceRate=${scienceScore}`)
    }
    if (gradeLevel == '4') {
      return fetch(`https://cdoe-data-api.herokuapp.com/api/v1/schools?type=${schoolType}&grade_levels=${gradeLevel}&stRatio=${studentTeacherRatio}&mathRate=${mathScore}&scienceRate=${scienceScore}&satRate=${satScore}`)
    }
  }

  findSchools() {
    this.props.activeSearchToggle()
    let { transitMode } = this.state;
    this.schoolFetchBuilder()
    .then(data => data.json())
    .then(finalSchools => {
      this.getGoogleDistances(finalSchools, transitMode)
    })
  }

  handleHomeAddress(e) {
    if (e.target.value !== '') {
      getGeoLocation(e.target.value, this.homeCallback);
    }
  }

  handleChange(evt) {
    const key = evt.target.id;
    const val = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    const obj = {};
    obj[key] = val;
    this.setState(obj);
  }

  toggleFilterView() {
    this.setState({ viewFilters: !this.state.viewFilters, selectedSchool: '' }, this.resetMap());
  }

  resetMap() {
    if (!this.state.viewFilters) {
      this.props.clearDirections();
      this.props.clearSchools();
    } else {
      this.props.clearDirections();
      /* eslint-disable no-alert, no-undef */
      window.setTimeout(this.props.activeSearchToggle, 300);
      /* eslint-enable no-alert, no-undef */
    }
  }

  directionsCallback(result, status) {
    if (status === 'OK') {
      this.props.setDirections(result);
    }
  }

  selectSchool(school) {
    this.setState({ selectedSchool: school.name }, () => {
      googleDirections(
        this.props.schoolResults.homeAddress,
        school, this.state.transitMode,
        this.directionsCallback,
      );
    });
    toggleTabView(this.props.tab, this.props.toggleTab, 'filters');
  }

  render() {
    const { tab, toggleTab, CurrentUser } = this.props;
    const hideFilters = hideComponent(tab, 'filters');

    return (
      <div>
        <button className={hideFilters ? 'slide-filter-btn hidden' : 'slide-filter-btn'} onClick={() => toggleTabView(tab, toggleTab, 'filters')}>{hideFilters ? '>' : '<'}</button>
        <AdvancedFilters
          tab={tab}
          handleChange={this.handleChange}
          {...this.state}
        />
        <div className={hideFilters ? 'filter-container hidden' : 'filter-container'}>
          {this.state.viewFilters ?
            <div>
              <h2 className="filter-header">Search Filters</h2>
              <form className="filter-fields">
                <article className="filter-item">
                  <h4>Home Street Address</h4>
                  <input
                    id="homeAddress"
                    type="text"
                    value={this.state.homeAddress}
                    onChange={e => this.handleChange(e)}
                    onBlur={e => this.handleHomeAddress(e)}
                  />
                </article>
                <article className="filter-item">
                  <h4>Grade Level</h4>
                  <select
                    id="gradeLevel"
                    value={this.state.gradeLevel}
                    onChange={e => this.handleChange(e)}
                  >
                    <option value="">Select grade level...</option>
                    <option value="1">ECE/Pre-K</option>
                    <option value="2">K-5</option>
                    <option value="3">6-8</option>
                    <option value="4">9-12</option>
                  </select>
                </article>
                <article className="filter-item">
                  <h4>School Type</h4>
                  <select
                    id="schoolType"
                    value={this.state.schoolType}
                    onChange={e => this.handleChange(e)}
                  >
                    <option value="">Select school type...</option>
                    <option value="public">Public/District</option>
                    <option value="charter">Charter</option>
                    <option value="other">Other</option>
                  </select>
                </article>
                <article className="filter-item">
                  <h4>Transportation Options</h4>
                  <label>
                    <input
                      type="radio"
                      onChange={() => this.setState({ transitMode: 'DRIVING' })}
                      checked={this.state.transitMode === 'DRIVING'}
                    />
                  Car
                  </label><br />
                  <label>
                    <input
                      type="radio"
                      onChange={() => this.setState({ transitMode: 'TRANSIT' })}
                      checked={this.state.transitMode === 'TRANSIT'}
                    />
                  Public Transit
                  </label><br />
                  <label>
                    <input
                      type="radio"
                      onChange={() => this.setState({ transitMode: 'BICYCLING' })}
                      checked={this.state.transitMode === 'BICYCLING'}
                    />
                  Bike
                  </label><br />
                  <label>
                    <input
                      type="radio"
                      onChange={() => this.setState({ transitMode: 'WALKING' })}
                      checked={this.state.transitMode === 'WALKING'}
                    />
                  Walk
                  </label><br />
                </article>
                <article className="filter-item">
                  <h4>Commute Distance</h4>
                  <input
                    id="commuteDist"
                    className="slider"
                    type="range"
                    max="30"
                    value={this.state.commuteDist}
                    onChange={e => this.handleChange(e)}
                  />
                  <p className="slider-data">{this.state.commuteDist} miles</p>
                </article>
                <article className="filter-item">
                  <h4>Commute Time</h4>
                  <input
                    id="commuteTime"
                    className="slider"
                    type="range"
                    max="60"
                    value={this.state.commuteTime}
                    onChange={e => this.handleChange(e)}
                  />
                  <p className="slider-data">{this.state.commuteTime} mins</p>
                </article>
              </form>
              <button
                className="search-btn"
                onClick={() => this.findSchools()}
                disabled={!this.state.gradeLevel || !this.state.schoolType || this.state.homeAddress === ''}
              >
                Find Schools
              </button>
            </div>
            :
            <div className="results-container">
              <div className="results-header-container">
                <h2 className="filter-header">Search Results</h2>
                <button
                  className="filter-back-btn"
                  onClick={() => this.toggleFilterView()}
                >
                  « Back To Filters
                </button>
              </div>
              { this.props.activeSearch ? <SearchSpinner />
              : this.props.schoolResults.schools.length > 0 ?
              this.props.schoolResults.schools.map((school, i) => (
                  <SearchResults
                      key={ i }
                      refNum={ i }
                      schoolData={ school }
                      selectedSchool={ this.state.selectedSchool }
                      selectSchool={ this.selectSchool }
                      userId={ CurrentUser.id }
                      commuteType={ this.state.transitMode } />
                ))
                :
                <h4>
                  Looks like your search came up empty. Try again but with different filter settings!
                </h4> }
            </div>
            }
        </div>
      </div>
    );
  }
}

export default filterContainer(Filters);
