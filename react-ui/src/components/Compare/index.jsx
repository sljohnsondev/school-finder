/* eslint-disable no-alert, react/prefer-stateless-function */
import React, { Component } from 'react';
import { toggleTabView, hideComponent } from '../Helpers/tabControls';
import filterContainer from '../../containers/Filters-container';
import './compare-style.css';

class Compare extends Component {
  render(props) {
    const { tab, toggleTab } = props;
    const hideCompare = hideComponent(tab, 'compare');
    const buttonText = tab === 'compare' ?
      (
        <div className="compare-tab-container">
          <p>Compare</p>
          <img className="downArrow" alt="down facing arrow" />
        </div>
      )
      :
      (
        <div className="compare-tab-container">
          <p>Compare</p>
          <img className="upArrow" alt="up facing arrow" />
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
        <div className={hideCompare ? 'compare-container hidden-compare' : 'compare-container'}>
          THIS IS WHERE THE COMPARE STUFF WILL GO!!
        </div>
      </div>
    );
  }
}

export default filterContainer(Compare);
