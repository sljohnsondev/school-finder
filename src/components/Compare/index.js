import React, { Component } from 'react';
import { toggleTabView, hideComponent } from '../Helpers/tabControls';
import filterContainer from '../../containers/Filters-container'
import './compare-style.css';

class Compare extends Component {
  constructor(props) {
    super()
    this.state = {
    }
  }

  render() {

    let { tab, toggleTab } = this.props;
    let hideCompare = hideComponent(tab, 'compare');

    return (
      <div>
        <button className={ hideCompare ? "slide-compare-btn hidden-compare" : "slide-compare-btn"}
                onClick={ () => toggleTabView(tab, toggleTab, 'compare') }
        >{ hideCompare ? 'UP' : 'DOWN' }</button>
        <div className={ hideCompare ? 'compare-container hidden-compare' : 'compare-container'}>
          THIS IS WHERE THE COMPARE STUFF WILL GO!!
        </div>
      </div>
    )
  }
};

export default filterContainer(Compare);
