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
      card = createComponent(SuiCard, { landscapeLayout: false });
    });

    afterEach(() => {
      card = null;
    });

    it('renders correctly', function() {
      expect(card).toExist();
    });

    it('has the proper sui-Card class name', function() {
      if(card.props.landscapeLayout === false){
        expect(card.props.className).toBe('sui-Card');
      }
    });

    it('has the proper sui-Card class name and landscape modificator', function() {
      if(card.props.landscapeLayout === true){
        expect(card.props.className).toBe('sui-Card sui-Card--landscape');
      }
    });

  });

  describe('Checking SuiCard rendering integration when sub-components are provided', function() {

    it('renders TopContent sub-component', function() {
      const suiCard = createComponent(SuiCard, { topComponent: ('Lorem ipsum dolor sit amet') });
      expect(suiCard.props.children.filter(child => child && child.props.children === 'Lorem ipsum dolor sit amet').length).toBe(1);
    });

    it('renders BottomContent sub-component', function() {
      const suiCard = createComponent(SuiCard, { bottomComponent: ('Lorem ipsum dolor sit amet') });
      expect(suiCard.props.children.filter(child => child && child.props.children === 'Lorem ipsum dolor sit amet').length).toBe(1);
    });
  });
});
