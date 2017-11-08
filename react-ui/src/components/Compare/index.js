import React, { Component } from 'react';
import { toggleTabView, hideComponent } from '../Helpers/tabControls';
import filterContainer from '../../containers/Filters-container';
import Chart from '../Chart';
import './compare-style.css';

class Compare extends Component {

  render() {

    let { tab, toggleTab, comparedSchools } = this.props;
    let hideCompare = hideComponent(tab, 'compare');
    let buttonText = tab == 'compare' ?
      <div className='compare-tab-container'>
        <p>Compare</p>
        <img className='downArrow' />
      </div> :
      <div className='compare-tab-container'>
        <p>Compare</p>
        <img className='upArrow' />
      </div>

    return (
      <div>
        <button className={ hideCompare ? "slide-compare-btn hidden-compare" : "slide-compare-btn"}
                onClick={ () => toggleTabView(tab, toggleTab, 'compare') }
        >{ buttonText }</button>
        <div className={ hideCompare ? 'compare-container hidden-compare' : 'compare-container'}>
          <Chart schools={ comparedSchools }/>
        </div>
      </div>
    )
  }
};

export default filterContainer(Compare);
