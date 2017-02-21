import React, { Component } from 'react';
import Header from '../Header';
import './app-style.css'

export default class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
