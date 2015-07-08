var assert = require('assert');
var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var Card = require('../src/sui-card');
var CardMedia = require('../src/sui-card-media');
var CardContent = require('../src/sui-card-content');

describe('sui-card component test suite', function () {
  it('loads without problems', function () {
    assert.notEqual(undefined, Card);
    assert.notEqual(undefined, CardMedia);
    assert.notEqual(undefined, CardContent);
  });

  it('renders into document', function() {
    var root = TestUtils.renderIntoDocument(<Card />);
    expect(root).toExist();
  });

  describe('Checking sui-card subcomponents structure', function () {
    it('renders sui-card-media sub-component correctly', function() {
      var media = TestUtils.renderIntoDocument(<CardMedia />);
      expect(media).toExist();
    });

    it('renders sui-card-content sub-component correctly', function() {
      var content = TestUtils.renderIntoDocument(<CardContent />);
      expect(content).toExist();
    });
  });
});
