import React, { Component } from 'react';
import './popupwindow-style.css';

export default class PopUpWindow extends Component {

  render() {
    let { Name, Address, WebUrl, PrincipalName, SchoolGradeDescription, Phone, GradeLevels } = this.props;
    return (
      <div className='popupwindown-container' >
        <p>{Name}</p>
      </div>
    )
  }
}
