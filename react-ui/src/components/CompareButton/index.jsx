import React, { Component } from 'react';
import './compare-button-styles.css';

class compareButton extends Component {
  constructor() {
    super()
    this.state = {
      isSelected: false
    }
    this.addSchool = this.addSchool.bind(this);
    this.removeSchool = this.removeSchool.bind(this);
  }

  addSchool(school) {
    this.props.selectCompare(school);
    this.setState({ isSelected: true });
  }

  removeSchool(id) {
    this.props.removeCompare(id);
    this.setState({ isSelected: false });
  }

  componentWillMount() {
    let selectedValue = false;
    this.props.comparedSchools.forEach((e) => {
      if (e.id === this.props.id) {
        selectedValue = true;
      }
    })
    this.setState({  isSelected: selectedValue })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.comparedSchools !== nextProps.comparedSchools) {
      let selectedValue = false;
      nextProps.comparedSchools.forEach((e) => {
        if (e.id === this.props.id) {
          selectedValue = true;
        }
      })
      this.setState({  isSelected: selectedValue })
    }
  }

  render () {
    const { id, schoolInfo } = this.props;

    return (
      <div>
        {
          this.state.isSelected ?
          <button
            className='compare-button selected'
            onClick={ () => this.removeSchool(id) }
          >Compare</button>
          :
          <button
            disabled={ this.props.comparedSchools.length >= 2 ? true : false }
            className='compare-button'
            onClick={ () => this.addSchool(schoolInfo) }
          >Compare</button>
        }
      </div>
    )
  }
};

export default compareButton;
