import React from 'react';
import SuiCard from '../src';
import '../src/index.scss';
import './index.scss';

const top = (
    <a href='http://google.com'>
      <img src='http://msue.anr.msu.edu/uploads/images/forest.jpg' />
    </a>
);

const bottom = (
  <div>
    <h2>Insert your title here</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <a href='http://google.com'>Contact</a>
  </div>
);

React.render(
  <SuiCard
    topImgDefault='http://placehold.it/300x200'
    topImgDefaultLink='http://google.com'
    topComponent={top}
    bottomComponent={bottom}
    />,
    document.getElementById('main'));
