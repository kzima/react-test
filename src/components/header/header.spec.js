import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { Header } from './Header';
import sinon from 'sinon';
import injectTapEventPlugin from 'react-tap-event-plugin';
describe('Header', () => {
  let wrapper;
  const stub = sinon.stub({
    isActive() {
      return true;
    },
  });

  beforeEach(() => {
    wrapper = shallow(<Header router={ stub } />);
  });

  it('should have Toolbar element', () => {
    expect(wrapper).to.exist;
  });
  it('should display project title', () => {
    expect(wrapper.find('.toolbar-title').props().text).to.equal('UQ Library');
  });
});

