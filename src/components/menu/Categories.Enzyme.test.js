import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {Categories} from './Categories';

function setup() {
    const props = {};
    return shallow(<Categories {...props} />);
}

describe('Categories via Enzyme', () => {
  it('renders all HTML (divs, h2, foodItems)', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('h2').length).toBe(5);
    expect(wrapper.find('FoodItem').length).toBe(6);
  });
  
  it('properly updates category/css when Entrees is clicked', () => {
    const wrapper = setup();
    wrapper.find('#cat1').simulate('click', { preventDefault() {} });
    expect(wrapper.state().category).toEqual(0);
    expect(wrapper.find("#testItem").prop('category')).toEqual(0);
  });

  it('properly updates category/css when Burgers is clicked', () => {
    const wrapper = setup();
    wrapper.find('#cat2').simulate('click', { preventDefault() {} });
    expect(wrapper.state().category).toEqual(1);
    expect(wrapper.find("#testItem").prop('category')).toEqual(1);
  });
  
  it('properly updates category/css when Sides is clicked', () => {
    const wrapper = setup();
    wrapper.find('#cat3').simulate('click', { preventDefault() {} });
    expect(wrapper.state().category).toEqual(2);
    expect(wrapper.find("#testItem").prop('category')).toEqual(2);
  });

  it('properly updates category/css when Drinks is clicked', () => {
    const wrapper = setup();
    wrapper.find('#cat4').simulate('click', { preventDefault() {} });
    expect(wrapper.state().category).toEqual(3);
    expect(wrapper.find("#testItem").prop('category')).toEqual(3);
  });

  it('properly updates category/css when Desserts is clicked', () => {
    const wrapper = setup();
    wrapper.find('#cat5').simulate('click', { preventDefault() {} });
    expect(wrapper.state().category).toEqual(4);
    expect(wrapper.find("#testItem").prop('category')).toEqual(4);
  });

});