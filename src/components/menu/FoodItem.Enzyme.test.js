import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {FoodItem} from './FoodItem';

function setup(noFood, cat) {
    const props = {
      item: {name: "Test", price: 1, soldOut: noFood},
      category: cat,
      onBuy: () => {}
    };

    return shallow(<FoodItem {...props} />);
}

describe('FoodItem via Enzyme', () => {
  it('renders divs and buttons', () => {
    const wrapper = setup(false, 0);
    expect(wrapper.find('div').length).toBe(7);
    expect(wrapper.find('button').length).toBe(3);
  });
  
  it('has appropriate picture/css if sold out', () => {
    const wrapper = setup(true, 0);
    expect(wrapper.find('#testCat').prop('className')).toEqual("img out");
  });

  it('has appropriate picture/css if its an entree', () => {
    const wrapper = setup(false, 0);
    expect(wrapper.find('#testCat').prop('className')).toEqual("img entree");
  });

  it('has appropriate picture/css if its a burger', () => {
    const wrapper = setup(false, 1);
    expect(wrapper.find('#testCat').prop('className')).toEqual("img burger");
  });

  it('has appropriate picture/css if its a side', () => {
    const wrapper = setup(false, 2);
    expect(wrapper.find('#testCat').prop('className')).toEqual("img side");
  });

  it('has appropriate picture/css if its a drink', () => {
    const wrapper = setup(false, 3);
    expect(wrapper.find('#testCat').prop('className')).toEqual("img drink");
    
  });

  it('has appropriate picture/css if its a dessert', () => {
    const wrapper = setup(false, 4);
    expect(wrapper.find('#testCat').prop('className')).toEqual("img dessert");
  });

  it('updates count correctly when pressing the plus button', () => {
    const wrapper = setup(false, 0);
    const countInit = wrapper.state().count;
    wrapper.instance().plus();
    const countFinal = wrapper.state().count;
    expect(countInit+1).toEqual(countFinal);
  });

});