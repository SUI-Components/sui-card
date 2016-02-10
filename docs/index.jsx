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
  multimediaurl: 'http://placehold.it/400x300',
  title: {
    element: 'h2',
    content: 'My Title'
  },
  description: 'My Description is very good to read.'
};

ReactDom.render(
  <SuiCard data={data}/>,
  document.getElementById('main'));
