import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {ProgressPageRow} from './ProgressPageRow';

function setup(status) {
    const props = {
      item: {name: "Test", price: 0, stat: status}
    };

    return shallow(<ProgressPageRow {...props} />);
}

describe('ProgressPage via Enzyme', () => {
  it('renders divs and h2s', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('h2').length).toBe(2);
  });
  
  it('changes state when delete() is called', () => {
    const wrapper = setup(0);
    const statusInit = wrapper.state().deleted;
    expect(statusInit).toEqual(false);
    wrapper.instance().delete();
    const statusFinal = wrapper.state().deleted;
    expect(statusFinal).toEqual(true);
  });

  it('removes element when button is clicked', () => {
    const wrapper = setup(0);
    wrapper.find('#testBegin').simulate('click', { preventDefault() {} });
    expect(wrapper.state().deleted).toEqual(true);
    expect(wrapper.find('div').length).toBe(0);
    expect(wrapper.find('h2').length).toBe(0);
    expect(wrapper.find('button').length).toBe(0);
  });


  it('has a correctly styled button when on first stage (i.e. "cancel" class)', () => {
    const wrapper = setup(0);
    expect(wrapper.find('#testBegin').prop('className')).toEqual("cancel");
  });

  it('has correct style for status "inProgress"', () => {
    const wrapper = setup(1);
    expect(wrapper.find('#nameID').prop('className')).toEqual("inProgress");
    expect(wrapper.find('#statusID').prop('className')).toEqual("inProgress");
  });

  it('has correct style for status "done"', () => {
    const wrapper = setup(2);
    expect(wrapper.find('#nameID').prop('className')).toEqual("done");
    expect(wrapper.find('#statusID').prop('className')).toEqual("done");
  });

  it('has a correctly styled button when on last stage (i.e. "pickup" class)', () => {
    const wrapper = setup(3);
    expect(wrapper.find('#testDone').prop('className')).toEqual("pickup");
  });

  it('has a correctly styled button when on first stage (i.e. "cancel" class)', () => {
    const wrapper = setup(0);
    expect(wrapper.find('#testBegin').prop('className')).toEqual("cancel");
  });

  it('has a correctly styled button when on last stage (i.e. "done" class)', () => {
    const wrapper = setup(3);
    expect(wrapper.find('#testDone').prop('className')).toEqual("pickup");
  });

  it('has a correctly styled button when on last stage (i.e. "inProgress" class)', () => {
    const wrapper = setup(3);
    expect(wrapper.find('#testDone').prop('className')).toEqual("pickup");
  });
});
