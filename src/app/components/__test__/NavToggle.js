jest.dontMock('../NavToggle.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const NavToggle = require('../NavToggle.jsx').default;

describe('NavToggle', () => {
  it('should call the function on click', () => {
    const mockFn = jest.genMockFunction();

    // Render a NavToggle button in the document
    const navToggle = TestUtils.renderIntoDocument(
      <NavToggle onToggleNav={mockFn}/>
    );

    const navToggleNode = ReactDOM.findDOMNode(navToggle);

    expect(mockFn.mock.calls.length).toEqual(0);

    TestUtils.Simulate.click(navToggleNode);

    expect(mockFn.mock.calls.length).toEqual(1);
    expect(mockFn).toBeCalled();
  });
});
