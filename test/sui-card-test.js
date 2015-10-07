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
    let childComponent;

    beforeEach(() => {
      childComponent = shallowRender(createComponent(<div>Lorem ipsum dolor sit amet</div>));
    });

    afterEach(() => {
      childComponent = null;
    });

    it('renders TopContent sub-component', function() {
      const suiCard = shallowRender(SuiCard, { topComponent: childComponent });
      expect(suiCard.props.children.filter(child => child && child.props.children === childComponent).length).toBe(1);
    });

    it('renders BottomContent sub-component', function() {
      const suiCard = shallowRender(SuiCard, { bottomComponent: childComponent });
      expect(suiCard.props.children.filter(child => child && child.props.children === childComponent).length).toBe(1);
    });
  });
});
