import expect from 'expect';
import SuiCard from '../src/sui-card';
import {shallowRender} from './utilities';
import {data} from './fixtures';

describe('sui-Card component test suite', function () {

  describe('loading', function() {
    it('all components are loaded properly', function () {
      expect(SuiCard).toNotBe(undefined);
    });
  });

  describe('SuiCard component', function() {
    let card;

    beforeEach(() => {
      card = shallowRender(SuiCard, {data});
    });

    afterEach(() => {
      card = null;
    });

    it('renders correctly', function() {
      expect(card).toExist();
    });

  });
});
