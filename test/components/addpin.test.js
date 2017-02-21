import React from 'react';
import { shallow, mount } from 'enzyme';
import AddPin from '../../src/components/AddPin';
import { Provider } from 'react-redux'
const { splitLocation, filterData } = require('../Helpers/ForecastHelpers');

const setup = () => {
  const props = {
    handleClick: jest.fn(),
  }

  const wrapper = mount(
    <AddPin handleClick={props.getForecast}/>
  );

  const Component = wrapper.find(AddPin);

  return {
    props,
    Component
  };
}

describe('AddPin', () => {

  it('should render an input field', () => {
    const { Component } = setup();
    expect(Component.find(input)).toEqual(1);
  });

  it('should simulate a button click', () => {
    const { Component } = setup();
    Component.find('button').simulate('click');
    expect(getForecast.calledOnce).toEqual(true);
  });

})
