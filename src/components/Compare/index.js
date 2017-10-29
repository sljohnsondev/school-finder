import React, { Component } from 'react';
import filterContainer from '../../containers/Filters-container'
import './compare-style.css';

class Compare extends Component {
  constructor() {
    super()
    this.state = {
      showCompare: false,
    }
    this.toggleCompareWindow = this.toggleCompareWindow.bind(this);
  }

  toggleCompareWindow() {
    this.setState({
      showCompare: !this.state.showCompare,
    });
  };

  render() {
    let showHide = this.state.showCompare ? 'show-compare' : 'hide-compare';
    let displayCompare = this.state.showCompare ? 'compare-page' : 'shrink-compare';
    let schoolDisplay = this.state.showCompare ? 'school' : 'hide';
    let infoDisplay = this.state.showCompare ? 'compare-item' : 'hide';
    return (
      <div className={ displayCompare }>
        <div
          className={ showHide }
          onClick={ () => this.toggleCompareWindow()}
        ></div>
        <div className={ infoDisplay }>
          <div className={ schoolDisplay }>
            <h3>East High School</h3>
            <p>East is the best high school in Denver</p>
            <p>East is located off of Colfax</p>
          </div>
          <div className='graph graph1'></div>
          <div className='graph graph2'></div>
          <div className='graph graph3'></div>
          <div className='remove'></div>
        </div>
        <div className={ infoDisplay }>
          <div className={ schoolDisplay }>
            <h3>Kent Denver</h3>
            <p>Kent is pretty much cool I guess...</p>
            <p>Kent is a gated community</p>
          </div>
          <div className='graph graph1'></div>
          <div className='graph graph2'></div>
          <div className='graph graph3'></div>
          <div className='remove'></div>
        </div>
      </div>
    )
  }
};

export default filterContainer(Compare);
