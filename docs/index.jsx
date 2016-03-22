import React from 'react';
import ReactDom from 'react-dom';
import SuiCard from '../src';
import SuiMultimedia from '@schibstedspain/sui-multimedia';

import '../src/index.scss';
import './styles/prism.scss';
import './index.scss';
import './styles/syntax.scss';
import './styles/codemirror.scss';
import './styles/demo.scss';
import '../node_modules/@schibstedspain/sui-multimedia/dist/_sui-multimedia.scss';

const images = [{
  src: 'https://scontent-mad1-1.cdninstagram.com/t51.2885-15/e15/11199623_633712610062793_1285693904_n.jpg',
  type: 'image',
  alt: 'Test',
  link: 'https://www.instagram.com/p/TNUdPKpMgM/?taken-by=davecarter'
}];

ReactDom.render(
    <SuiCard className={'myCustom-class'}
      primary={[
        <a key={1} href={images[0].link}><img src={images[0].src} /></a>
      ]}
      secondary={[
        <div key={2}>
          <h2 className='sui-Card-title'>This is the Card Title</h2>
          <p className='sui-Card-description'>This is the description text of this Card</p>
        </div>
      ]}
    />,
  document.getElementById('main')
);

ReactDom.render(
    <SuiCard className={'myCustom-class'}
      primary={[
        <SuiMultimedia key={3} images={images} />
      ]}
      secondary={[
        <div key={4}>
          <h2 className='sui-Card-title'>This is the Card Title</h2>
          <p className='sui-Card-description'>This is the description text of this Card</p>
        </div>
      ]}
    />,
  document.getElementById('main-multimedia')
);
