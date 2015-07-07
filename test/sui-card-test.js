import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import Card from '../src/sui-card';
import CardMedia from '../src/sui-card-media';
import CardContent from '../src/sui-card-content';

import {createComponent} from './utilities'

describe('sui-card component test suite', function () {

  describe('loading', function() {
    it('all components are loaded properly', function () {
      expect(Card).toNotBe(undefined);
      expect(CardMedia).toNotBe(undefined);
      expect(CardMedia).toNotBe(undefined);
    });
  });

  describe('single card content sub-component', function () {
    let cardContent;

    beforeEach(() => {
      cardContent = createComponent(CardContent);
    });

    afterEach(() => {
      cardContent = null;
    });

    it('renders correctly', function() {
      expect(cardContent).toExist();
    });

    it('has the proper class for container', function() {
      expect(cardContent.props.className).toBe('sui-card__content');
    });
  });

  describe('card content sub-component with children', function() {
    let cardContent;

    beforeEach(() => {
      cardContent = createComponent(CardContent, {}, (<div className='test'>Hello</div>));
    });

    afterEach(() => {
      cardContent = null;
    });

    it('children are rendered correctly', function() {
      expect(cardContent.props.children).toExist();
      expect(cardContent.props.children.type).toBe('div');
      expect(cardContent.props.children.props.className).toBe('test');
      expect(cardContent.props.children.props.children).toBe('Hello');
    });
  });

  describe('single card media with multimedia url', function() {
    let cardMedia;

    beforeEach(() => {
      cardMedia = createComponent(CardMedia, {multimediaUrl: 'http://an.image.url'});
    });

    afterEach(() => {
      cardMedia = null;
    });

    it('has the proper class for media container', function() {
      expect(cardMedia.props.className).toBe('sui-card__media');
    });
  });

  describe('single card media without multimedia url', function() {
    let cardMedia;

    beforeEach(() => {
      cardMedia = createComponent(CardMedia);
    });

    afterEach(() => {
      cardMedia = null;
    });

    it('shows a default picture', function() {
      expect(cardMedia.props.className).toBe('sui-card__media--no-picture');
    });
  });

  describe('single card', function() {
    let card;

    beforeEach(() => {
      card = createComponent(Card);
    });

    afterEach(() => {
      card = null;
    });

    it('renders correctly', function() {
      expect(card).toExist();
    });

    it('has the proper class name', function() {
      expect(card.props.className).toBe('sui-card');
    });
  });

  describe('Checking Card rendering integration with sub-components', function() {
    let card;

    beforeEach(() => {
      card = createComponent(Card, {multimediaUrl: 'http://an.image.url'}, (<div className='test'>Hello</div>));
    });

    afterEach(() => {
      card = null;
    });

    it('renders with children', function() {
      const cardMedia = card.props.children[0];
      const cardContent = card.props.children[1];

      expect(cardMedia).toExist();
      expect(cardMedia.props.multimediaUrl).toBe('http://an.image.url');
      expect(cardContent).toExist();
      expect(cardContent.props.children.type).toBe('div');
      expect(cardContent.props.children.props.className).toBe('test');
      expect(cardContent.props.children.props.children).toBe('Hello');
    });
  });
});
