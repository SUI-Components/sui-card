import React from 'react';
import SuiCard from '../src';
import Playground from 'component-playground';
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

const componentExample = `
  <SuiCard
    topImgDefault='http://placehold.it/300x200'
    topImgDefaultLink='http://google.com'
    topComponent={top}
    bottomComponent={bottom}
    landscapeLayout={true}
    contentFirst={true}
    />
`;

React.render(
  <Playground codeText={componentExample} scope={{React, SuiCard, bottom, top}}/>, document.getElementById('item1'));
