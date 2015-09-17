import React from 'react';
import SuiCard from '../src';
import BottomContent from '../src/bottom-content';
import '../src/index.scss';
import './index.scss';

const top = (
  <div className='sui-Card-topContent'>
    <a href='http://google.com'>
      <img src='http://msue.anr.msu.edu/uploads/images/forest.jpg' />
    </a>
  </div>
);

const bottom = (
  <BottomContent
    title='Insert your title here'
    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    contactLiteral='Contact' contactLink='http://google.com'/>
);

React.render(
  <SuiCard
    topImgDefault='http://placehold.it/300x200'
    topImgDefaultLink='http://google.com'
    topComponent={top}
    bottomComponent={bottom} />,
    document.getElementById('main'));
