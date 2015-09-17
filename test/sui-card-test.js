import expect from 'expect';
import SuiCard from '../src/sui-card';

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

  describe('Checking SuiCard rendering integration when sub-components are provided', function() {

    it('renders TopContent sub-component', function() {
      const suiCard = createComponent(SuiCard, { topComponent: ('Lorem ipsum dolor sit amet') });
      expect(suiCard.props.children.filter(child => child && child.props.children === 'Lorem ipsum dolor sit amet').length).toBe(1);
    });
  });
});
