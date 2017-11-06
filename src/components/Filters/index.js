import React, { Component } from 'react';
import SearchResults from '../SearchResults';
import getGeoLocation from '../Helpers/getGeoLocation.js';
import googleDistanceMatrix from '../Helpers/googleDistanceMatrix.js';
import googleDirections from '../Helpers/googleDirections.js';
import filterContainer from '../../containers/Filters-container'
import AdvancedFilters from '../AdvancedFilters'
import SearchSpinner from '../SearchSpinner'
import { toggleTabView, hideComponent } from '../Helpers/tabControls';
import './filters-style.css';

class Filters extends Component {
  constructor() {
    super()
    this.state = {
      gradeLevel: '',
      schoolType: '',
      transitMode: 'DRIVING',
      commuteDist: 15,
      commuteTime: 30,
      elaScore: 0,
      geometryScore: 0,
      scienceScore: 0,
      satScore: 0,
      studentTeacherRatio: 0,
      viewFilters: true,
      homeAddress: '',
      selectedSchool: ''
    }
    this.homeCallback = this.homeCallback.bind(this)
    this.selectSchool = this.selectSchool.bind(this)
    this.directionsCallback = this.directionsCallback.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    let key = evt.target.id;
    let val = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    let obj = {};
    obj[key] = val;
    this.setState(obj);
  }

  //Get home address coords and set in store
  handleHomeAddress(e) {
    if (e.target.value !== "") {
      getGeoLocation(e.target.value, this.homeCallback);
    }
  }

  homeCallback(homeAddressCoords) {
    this.props.setHomeAddress(homeAddressCoords)
  }

  //Get schools in FB, filter them, receive commut info from Google, and set to store
  findSchools() {
    this.props.activeSearchToggle()
    let { schoolType, gradeLevel, transitMode } = this.state;
    fetch(`https://cdoe-data-api.herokuapp.com/api/v1/schools?type=${schoolType}&grade_levels=${gradeLevel}`)
    .then(data => data.json())
    .then(finalSchools => {
      this.getGoogleDistances(finalSchools, transitMode)
    })
  }

  getGoogleDistances(finalSchools, transitMode) {
    let dataLength = finalSchools.length
    let count = Math.ceil(dataLength / 25)
    for (let i = 0; i < count; i++) {
      let begin = i * 25
      let end = i * 25 + 25
      let data = finalSchools.slice(begin, end)
      let callBack = (response) => {
        let { commuteDist, commuteTime } = this.state;
        let finalSchoolData = response.rows[0].elements.map((school, i) => {
          return Object.assign({}, data[i], { commute: { distance: {text: school.distance.text, value: school.distance.value},
                                              time: {text: school.duration.text, value: school.duration.value} },
                                              showInfo: false } )
        })
        this.props.setSchools(finalSchoolData, commuteTime, commuteDist);
      }
      googleDistanceMatrix(this.props.schoolResults.homeAddress, data, transitMode, callBack)
    }
    this.toggleFilterView()
  }

  //Filter view functionality
  toggleFilterView() {
    this.setState({ viewFilters: !this.state.viewFilters, selectedSchool: '' }, this.resetMap())
  }

  resetMap() {
    if (!this.state.viewFilters) {
      this.props.clearDirections()
      this.props.clearSchools()
    } else {
      this.props.clearDirections()
      window.setTimeout(this.props.activeSearchToggle, 300)
    }
  }

  directionsCallback(result, status) {
    if (status === 'OK') {
      this.props.setDirections(result);
    }
  }

  selectSchool(school) {
    this.setState({ selectedSchool: school.name }, () => {
      googleDirections(this.props.schoolResults.homeAddress, school, this.state.transitMode, this.directionsCallback);
    })
    toggleTabView(this.props.tab, this.props.toggleTab, 'filters')
  }

  render() {

    let { tab, toggleTab, patchUser, CurrentUser } = this.props;

    let hideFilters = hideComponent(tab, 'filters');

    return (
      <div>
        <button className={ hideFilters ? "slide-filter-btn hidden" : "slide-filter-btn"} onClick={ () => toggleTabView(tab, toggleTab, 'filters') }>{ hideFilters ? '>' : '<' }</button>
        <AdvancedFilters tab={ tab }
                         handleChange={ this.handleChange }
                         { ...this.state }
        />
        <div className={ hideFilters ? 'filter-container hidden' : 'filter-container'}>
          {this.state.viewFilters ?
            <div>
              <h2 className='filter-header'>Search Filters</h2>
              <form className='filter-fields'>
                <article className='filter-item'>
                  <h4>Home Street Address</h4>
                  <input id='homeAddress' type='text' value={ this.state.homeAddress } onChange={ (e) => this.handleChange(e)} onBlur={ (e) => this.handleHomeAddress(e) } />
                </article>
                <article className='filter-item'>
                  <h4>Grade Level</h4>
                  <select id='gradeLevel' value={ this.state.gradeLevel } onChange={(e) => this.handleChange(e)}>
                    <option value=''>Select grade level...</option>
                    <option value='1'>ECE/Pre-K</option>
                    <option value='2'>K-5</option>
                    <option value='3'>6-8</option>
                    <option value='4'>9-12</option>
                  </select>
                </article>
                <article className='filter-item'>
                  <h4>School Type</h4>
                  <select id='schoolType' value={ this.state.schoolType } onChange={(e) => this.handleChange(e)}>
                    <option value=''>Select school type...</option>
                    <option value='public'>Public/District</option>
                    <option value='charter'>Charter</option>
                    <option value='other'>Other</option>
                  </select>
                </article>
                <article className='filter-item'>
                  <h4>Transportation Options</h4>
                  <label>
                    <input
                      type='radio'
                      onChange={ () => this.setState({ transitMode: 'DRIVING' }) }
                      checked={this.state.transitMode === 'DRIVING'}
                    />
                  Car</label><br/>
                  <label>
                    <input
                      type='radio'
                      onChange={ () => this.setState({ transitMode: 'TRANSIT' })}
                      checked={this.state.transitMode === 'TRANSIT'}
                    />
                  Public Transit</label><br/>
                  <label>
                    <input
                      type='radio'
                      onChange={ () => this.setState({ transitMode: 'BICYCLING' })}
                      checked={this.state.transitMode === 'BICYCLING'}
                    />
                  Bike</label><br/>
                  <label>
                    <input
                      type='radio'
                      onChange={ () => this.setState({ transitMode: 'WALKING' })}
                      checked={this.state.transitMode === 'WALKING'}
                    />
                  Walk</label><br/>
                </article>
                <article className='filter-item'>
                  <h4>Commute Distance</h4>
                  <input
                    id='commuteDist'
                    className='slider'
                    type="range"
                    max="30"
                    value={this.state.commuteDist}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <p className='slider-data'>{this.state.commuteDist} miles</p>
                </article>
                <article className='filter-item'>
                  <h4>Commute Time</h4>
                  <input
                    id='commuteTime'
                    className='slider'
                    type="range"
                    max="60"
                    value={this.state.commuteTime}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <p className='slider-data'>{this.state.commuteTime} mins</p>
                </article>
              </form>
              <button
                className='search-btn'
                onClick={ (e) => { this.findSchools(),  patchUser({ street_address: document.getElementById('homeAddress').value }, CurrentUser[0].id)}}
                disabled={ !this.state.gradeLevel || !this.state.schoolType || this.state.homeAddress === '' }
              >Find Schools</button>
            </div>
            :
            <div className='results-container'>
              <div className='results-header-container'>
                <h2 className='filter-header'>Search Results</h2>
                <button
                  className='filter-back-btn'
                  onClick={ () => this.toggleFilterView() }
                >« Back To Filters</button>
              </div>
              { this.props.activeSearch ? <SearchSpinner />
              : this.props.schoolResults.schools.length > 0 ? this.props.schoolResults.schools.map((school, i) => {
                return (
                  <SearchResults
                      key={ i }
                      refNum={ i }
                      schoolData={ school }
                      selectedSchool={this.state.selectedSchool}
                      selectSchool={ this.selectSchool }
                      userId={ this.props.CurrentUser[0].id } />
                )
              }) : <h4>Looks like your search came up empty.  Try again but with different filter settings!</h4> }
            </div>
            }
        </div>
      </div>
    )
  }
}

export default filterContainer(Filters)
