/* eslint-disable no-alert, class-methods-use-this */
import React, { Component } from 'react';
import './advanced-filters-style.css';

export default class AdvancedFilters extends Component {
  constructor() {
    super();
    this.state = {
      hideAdvFilter: true,
    };
  }

  toggleAdvancedFilter() {
    if (this.state.hideAdvFilter === true) {
      this.setState({ hideAdvFilter: false });
    } else if (this.state.hideAdvFilter === false) {
      this.setState({ hideAdvFilter: true });
    }
  }

  displayGradeFilters(props) {
    const {
      gradeLevel,
      elaScore,
      geometryScore,
      scienceScore,
      satScore,
      handleChange,
    } = props;

    if (gradeLevel === '1') {
      return (

        <p className="filter-item">
          There are currently no additional metrics to share for Pre-K and ECE programs
        </p>
      );
    }

    if (gradeLevel === '2') {
      return (
        <div>
          <article className="filter-item">
            <h5>ELA (5th grade)</h5>
            <input
              id="elaScore"
              className="slider"
              type="range"
              max="100"
              value={elaScore}
              onChange={e => handleChange(e)}
            />
            <p className="slider-data">{ elaScore }%</p>
          </article>
          <article className="filter-item">
            <h5>Math (5th grade)</h5>
            <input
              id="geometryScore"
              className="slider"
              type="range"
              max="100"
              value={geometryScore}
              onChange={e => handleChange(e)}
            />
            <p className="slider-data">{ geometryScore }%</p>
          </article>
          <article className="filter-item">
            <h5>Science (5th grade)</h5>
            <input
              id="scienceScore"
              className="slider"
              type="range"
              max="100"
              value={scienceScore}
              onChange={e => handleChange(e)}
            />
            <p className="slider-data">{ scienceScore }%</p>
          </article>
        </div>
      );
    }

    if (gradeLevel === '3') {
      return (
        <div>
          <article className="filter-item">
            <h5>ELA (8th grade)</h5>
            <input
              id="elaScore"
              className="slider"
              type="range"
              max="100"
              value={elaScore}
              onChange={e => handleChange(e)}
            />
            <p className="slider-data">{elaScore}%</p>
          </article>
          <article className="filter-item">
            <h5>Math (8th grade)</h5>
            <input
              id="geometryScore"
              className="slider"
              type="range"
              max="100"
              value={geometryScore}
              onChange={e => handleChange(e)}
            />
            <p className="slider-data">{geometryScore}%</p>
          </article>
          <article className="filter-item">
            <h5>Science (8th grade)</h5>
            <input
              id="scienceScore"
              className="slider"
              type="range"
              max="100"
              value={scienceScore}
              onChange={e => handleChange(e)}
            />
            <p className="slider-data">{ scienceScore }%</p>
          </article>
        </div>
      );
    }

    return (
      <div>
        <article className="filter-item">
          <h5>ELA (9th grade)</h5>
          <input
            id="elaScore"
            className="slider"
            type="range"
            max="100"
            value={elaScore}
            onChange={e => handleChange(e)}
          />
          <p className="slider-data">{ elaScore }%</p>
        </article>
        <article className="filter-item">
          <h5>HS Geometry</h5>
          <input
            id="geometryScore"
            className="slider"
            type="range"
            max="100"
            value={geometryScore}
            onChange={e => handleChange(e)}
          />
          <p className="slider-data">{ geometryScore }%</p>
        </article>
        <article className="filter-item">
          <h5>HS Science</h5>
          <input
            id="scienceScore"
            className="slider"
            type="range"
            max="100"
            value={scienceScore}
            onChange={e => handleChange(e)}
          />
          <p className="slider-data">{ scienceScore }%</p>
        </article>
        <article className="filter-item">
          <h5>SAT</h5>
          <input
            id="satScore"
            className="slider"
            type="range"
            max="100"
            value={satScore}
            onChange={e => handleChange(e)}
          />
          <p className="slider-data">{ satScore }%</p>
        </article>
      </div>
    );
  }

  render() {
    const {
      tab,
      gradeLevel,
      viewFilters,
      studentTeacherRatio,
      handleChange,
    } = this.props;
    const hidden = tab !== 'filters';
    const hideAdvFilter = this.state.hideAdvFilter || !viewFilters;

    if (tab !== 'filters' && !this.state.hideAdvFilter) {
      this.setState({ hideAdvFilter: true });
    }

    return (

      <div className={hidden ? 'adv-filters-hidden' : 'adv-filters'}>
        <button
          className={hideAdvFilter ? 'slide-adv-filter-btn hidden-adv-filter' :
                                      'slide-adv-filter-btn'}
          onClick={() => this.toggleAdvancedFilter(tab)}
          disabled={!viewFilters || gradeLevel === ''}
        >
          { hideAdvFilter ? '>' : '<' }<p>More Filters</p>
        </button>
        { tab === 'filters' ?
          <div className={hideAdvFilter ? 'adv-filter-container hidden-adv-filter' : 'adv-filter-container'}>
            <form className="filter-fields">
              <article className="filter-item">
                <h5>Student/Teacher Ratio</h5>
                <input
                  id="studentTeacherRatio"
                  className="slider"
                  type="range"
                  max="200"
                  value={studentTeacherRatio}
                  onChange={e => handleChange(e)}
                />
                <p className="slider-data">{studentTeacherRatio}</p>
              </article>
              <h5 className="filter-header" style={{ textDecoration: 'underline', fontSize: '16px' }}>CMAS Metrics (2016)</h5>
              <p>% of students who met/exceeded expectations</p>
              { gradeLevel ?
                  this.displayGradeFilters(this.props)
                  :
                  <p>Please select a grade level to view additional filters</p>
                }
            </form>
          </div>
            :
          <div style={{ display: 'none' }} />
        }
      </div>
    );
  }
}
