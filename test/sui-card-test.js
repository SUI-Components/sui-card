var assert = require('assert');
var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var Card = require('../src/sui-card');

describe('sui-card component test suite', function () {
  it('loads without problems', function () {
    assert.notEqual(undefined, Card);
  });

  it('renders into document', function() {
    var root = TestUtils.renderIntoDocument(<Card />);
    expect(root).toExist();
  });
});
