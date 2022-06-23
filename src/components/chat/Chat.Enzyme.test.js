import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {Chat} from './Chat';

function setup(status) {
    const props = {
      onSubmit: () => {}
    };

    return shallow(<Chat {...props} />);
}

describe('ChatPage via Enzyme', () => {
    it('renders a form', () => {
        const wrapper = setup();
        expect(wrapper.find('form').length).toBe(1);
    });
});