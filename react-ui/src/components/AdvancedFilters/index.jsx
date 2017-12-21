import React, { Component } from 'react';
import './advanced-filters-style.css';

export default class AdvancedFilters extends Component {
  constructor() {
    super()
    this.state = {
      hideAdvFilter: true
    }
  }

  toggleAdvancedFilter(tab) {
    if (this.state.hideAdvFilter === true) {
      this.setState({ hideAdvFilter: false });
    } else if (this.state.hideAdvFilter === false) {
      this.setState({ hideAdvFilter: true });
    }
  }

  displayGradeFilters(props) {

    let { gradeLevel, elaScore, mathScore, scienceScore, satScore, handleChange} = props;

    if (gradeLevel === '1') {
      return (<p className='filter-item' style={{ marginTop: '18px', padding: '0 12px' }}>There are currently no additional metrics to share for Pre-K and ECE programs.</p>)
    }

    if (gradeLevel === '2') {
      return (
        <div>
          <article className='filter-item'>
            <h5>Math (5th grade)</h5>
            <input
              id='mathScore'
              className='slider'
              type="range"
              max="100"
              value={ mathScore }
              onChange={(e) => handleChange(e)}
            />
            <p className='slider-data'>{ mathScore }%</p>
          </article>
          <article className='filter-item'>
            <h5>Science (5th grade)</h5>
            <input
              id='scienceScore'
              className='slider'
              type="range"
              max="100"
              value={ scienceScore }
              onChange={(e) => handleChange(e)}
            />
            <p className='slider-data'>{ scienceScore }%</p>
          </article>
        </div>
      )
    }

    if (gradeLevel === '3') {
      return (
        <div>
          <article className='filter-item'>
            <h5>Math (8th grade)</h5>
            <input
              id='mathScore'
              className='slider'
              type="range"
              max="100"
              value={ mathScore }
              onChange={(e) => handleChange(e)}
            />
            <p className='slider-data'>{ mathScore }%</p>
          </article>
          <article className='filter-item'>
            <h5>Science (8th grade)</h5>
            <input
              id='scienceScore'
              className='slider'
              type="range"
              max="100"
              value={ scienceScore }
              onChange={(e) => handleChange(e)}
            />
            <p className='slider-data'>{ scienceScore }%</p>
          </article>
        </div>
      )
    }

    if (gradeLevel === '4') {
      return (
        <div>
          <article className='filter-item'>
            <h5>HS Geometry</h5>
            <input
              id='mathScore'
              className='slider'
              type="range"
              max="100"
              value={ mathScore }
              onChange={(e) => handleChange(e)}
            />
            <p className='slider-data'>{ mathScore }%</p>
          </article>
          <article className='filter-item'>
            <h5>HS Science</h5>
            <input
              id='scienceScore'
              className='slider'
              type="range"
              max="100"
              value={ scienceScore }
              onChange={(e) => handleChange(e)}
            />
            <p className='slider-data'>{ scienceScore }%</p>
          </article>
          <article className='filter-item' style={{ marginTop: '30px' }}>
            <h5 style={{ fontSize: '15px' }}>SAT (mean score)</h5>
            <input
              id='satScore'
              className='slider'
              type="range"
              max="1250"
              value={ satScore }
              onChange={(e) => handleChange(e)}
            />
            <p className='slider-data'>{ satScore }</p>
          </article>
        </div>
      )
    }
  }

  componentWillReceiveProps(nextProps) {
    let {tab, viewFilters} = nextProps;

    if (tab !== 'filters' && !this.state.hideAdvFilter) {
      this.setState({ hideAdvFilter: true });
    }
    if (!viewFilters && !this.state.hideAdvFilter) {
      this.setState({ hideAdvFilter: true });
    }
  }

  render() {

    let { tab, gradeLevel, viewFilters, studentTeacherRatio, handleChange } = this.props;
    let hidden = tab !== 'filters' ? true : false;
    let hideAdvFilter  = this.state.hideAdvFilter || !viewFilters ? true : false;

    return (

      <div className={ hidden ? 'adv-filters-hidden' : 'adv-filters'}>
        <button className={ hideAdvFilter ? "slide-adv-filter-btn hidden-adv-filter" :
                                            "slide-adv-filter-btn"}
                onClick={ () => this.toggleAdvancedFilter(tab) }
                disabled={ !viewFilters || gradeLevel === '' }
        >{ hideAdvFilter ? '>' : '<' }<p>More Filters</p></button>
        { tab === 'filters' ?
            <div className={ hideAdvFilter ? 'adv-filter-container hidden-adv-filter' : 'adv-filter-container'}>
              <form className='filter-fields'>
                <article className='filter-item'>
                  <h5 style={{ fontSize: '15px' }}>Student/Teacher Ratio</h5>
                  <input
                    id='studentTeacherRatio'
                    className='slider'
                    type="range"
                    max="200"
                    value={ studentTeacherRatio }
                    onChange={(e) => handleChange(e)}
                  />
                  <p className='slider-data'>{studentTeacherRatio} students/teacher</p>
                </article>
                <h5 className='filter-header' style={{ marginTop: '25px', textDecoration: 'underline', fontSize: '18px' }}>CMAS Metrics (2016)</h5>
                <p style={{ fontSize: '14px', marginTop: '5px', padding: '0 10px' }}>% of students who met or exceeded expectations</p>
                { gradeLevel ?
                  this.displayGradeFilters(this.props)
                  :
                  <p>Please select a grade level to view additional filters</p>
                }
              </form>
            </div>
            :
            <div style={{ display: "none" }} />
        }
      </div>
    )
  }
}
