import expect from 'expect';
import SuiCard from '../src/sui-card';
import React from 'react';
import {createComponent, shallowRender} from './utilities';

describe('sui-Card component test suite', function () {

  describe('loading', function() {
    it('all components are loaded properly', function () {
      expect(SuiCard).toNotBe(undefined);
    });
  });

  describe('SuiCard component', function() {
    let card;

    beforeEach(() => {
      card = shallowRender(SuiCard, { landscapeLayout: false });
    });

    afterEach(() => {
      card = null;
    });

    it('renders correctly', function() {
      expect(card).toExist();
    });

  });
});
