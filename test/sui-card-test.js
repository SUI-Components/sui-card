import React from 'react';
import expect from 'expect';
import SuiCard from '../src/sui-card';
import TopContent from '../src/top-content';
import BottomContent from '../src/bottom-content';

import {createComponent} from './utilities';

describe('sui-Card component test suite', function () {

  describe('loading', function() {
    it('all components are loaded properly', function () {
      expect(SuiCard).toNotBe(undefined);
    });
  });

  describe('SuiCard component', function() {
    let card;

    beforeEach(() => {
      card = createComponent(SuiCard);
    });

    afterEach(() => {
      card = null;
    });

    it('renders correctly', function() {
      expect(card).toExist();
    });

    it('has the proper sui-Card class name', function() {
      expect(card.props.className).toBe('sui-Card');
    });
  });

  describe('TopContent sub-component', function () {
    let topContent;

    beforeEach(() => {
      topContent = createComponent(TopContent);
    });

    afterEach(() => {
      topContent = null;
    });

    it('renders correctly', function() {
      expect(topContent).toExist();
    });

    it('has the proper class sui-Card-topContent for container', function() {
      expect(topContent.props.className).toBe('sui-Card-topContent');
    });
  });

  describe('BottomContent sub-component', function() {
    let bottomContent;

    beforeEach(() => {
      bottomContent = createComponent(BottomContent);
    });

    afterEach(() => {
      bottomContent = null;
    });

    it('renders correctly', function() {
      expect(bottomContent).toExist();
    });

    it('has the proper class sui-Card-bottomContent for container', function() {
      expect(bottomContent.props.className).toBe('sui-Card-bottomContent');
    });
  });

  describe('Checking SuiCard rendering integration when sub-components are provided', function() {

    it('renders TopContent sub-component', function() {
      const suiCard = createComponent(SuiCard, { topComponent: ('Lorem ipsum dolor sit amet') });
      expect(suiCard.props.children.filter(child => child && child.props.children === 'Lorem ipsum dolor sit amet').length).toBe(1);
    });
  });
});
