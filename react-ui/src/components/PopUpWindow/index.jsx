import React, { Component } from 'react';
import './popupwindow-style.css';

export default class PopUpWindow extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="popupwindown-container" >
        <p>{name}</p>
      </div>
    );
  }
}
