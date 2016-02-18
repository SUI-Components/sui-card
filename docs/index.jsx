import React from 'react';
import ReactDom from 'react-dom';
import SuiCard from '../src';
import '../src/index.scss';
import './styles/prism.scss';
import './index.scss';

import './styles/syntax.scss';
import './styles/codemirror.scss';
import './styles/demo.scss';

const data = {
  multimedia: [
    {
      src: 'https://scontent-mad1-1.cdninstagram.com/t51.2885-15/e15/11189686_499366993548088_1592806536_n.jpg',
      alt: 'Bicing Old town Barcelona',
      type: 'image',
      link: 'https://www.instagram.com/p/UCYp_ypMkN/?taken-by=davecarter'
    }
  ],
  title: 'Bicing Old town Barcelona',
  description: 'lorem ipsum'
};

ReactDom.render(
  <SuiCard data={data}/>,
  document.getElementById('main'));

ReactDom.render(
    <SuiCard
      primary={[
        <div className='sui-Card-primary'>
          <SuiMultimedia />
        </div>
      ]}
      secondary={[
        <div className='sui-Card-secondary'>
          <SuiTitle />
          <SuiDescription />
        </div>
      ]}
    />
);
