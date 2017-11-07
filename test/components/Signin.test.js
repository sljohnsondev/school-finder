import React from 'react';
import { shallow, mount } from 'enzyme';
import SignIn from '../../src/components/SignIn';
import { Provider } from 'react-redux';

const setup = () => {
  const props = {
    signInHandler: jest.fn(),
    toggleTab: jest.fn()
  }

  const wrapper = mount(
    <SignIn signInHandler={ props.signInHandler } toggleTab={ props.toggleTab }/>
  );

  const Component = wrapper.find(SignIn);

  return {
    props,
    Component
  };
};

describe('SignIn', () => {

  it('should render an input field', () => {
    const { Component } = setup();
    expect(Component.find(input)).toEqual(1);
  });

  // it('should simulate a button click', () => {
  //   const { Component } = setup();
  //   Component.find('button').simulate('click');
  //   expect(getForecast.calledOnce).toEqual(true);
  // });

})
