import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import axios from 'axios';
import { expect } from 'chai';
import { LibraryList } from './LibraryList.js';
import { createTestComponent } from '../../../../test/utils/create-test-component';
require('promise.prototype.finally').shim(); // eslint-disable-line no-undef

// wrap our component with muiTheme from Material Ui
const LibraryListMui = createTestComponent(LibraryList);

/* eslint-disable-line */
describe('Library List', () => {
    let wrapper;
    const locations = [
        {
            "lid": 3000,
            "name": "Architecture & Music Library",
            "category": "library",
            "departments": [],
        },
        {
            "lid": 4000,
            "name": "Architecture & Music Library",
            "category": "library",
            "departments": [],
        }
    ];

    beforeEach(() => {
        // we use mount to get access to the lifecycle of the component
        // in this case we need access to componentWillMount and mock the AJAX response
        wrapper = mount(<LibraryListMui />);

        // mock axios.get
        sinon.spy(axios, "get");
    });

    afterEach(() => {
        axios.get.restore();
    });


    it('Renders empty `locations` array based on the initial state', () => {
        expect(wrapper.state().locations).to.be.instanceof(Array);
        expect(wrapper.state().locations.length).to.equal(0);
    });

    // as a user I should be able to view a list of locations
    it('should render list of items', () => {
        wrapper.setState({
            locations,
        });
        expect(wrapper.find('.locations').children().length).to.equal(2);
    });

    it('calls two ajax in `componentWillMount`', (done) => {

        // we need a clean component in this test
        // componentWillMount lifecycle method to be trigger at the exact same time that particular test is running
        wrapper = mount(<LibraryListMui />);
        expect(axios.get.callCount).to.equal(2);

        // ajax call can take time, so we kill this test right away
        done();
    });

    // TODO
    // as a user I should be able to filter locations by name

    // as a user I should be able to view opening hours for a selected library

    // as a user I should be able to view available computers in the selected library

// library details should be accessible by route /#/{library id}
});
