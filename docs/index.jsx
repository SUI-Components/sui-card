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
  multimediaurl: 'https://scontent-mad1-1.cdninstagram.com/t51.2885-15/e15/11189686_499366993548088_1592806536_n.jpg',
  title: 'My Title',
  description: 'Lorem ipsum dolor sit amet'
};

ReactDom.render(
  <SuiCard data={data} landscapeLayout />,
  document.getElementById('main'));
