import React from 'react';
import {Card} from '../src';
import '../src/index.scss';

React.render(
  <Card
    multimediaUrl={'http://imges.inmofactory.com/inmofactory/documents/1/98852/7538658/49226769.jpg/300x225/w_0/'}>
    <div class='content'>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Eius beatae excepturi
        pariatur ullam temporibus ipsa molestias
        officia eligendi, recusandae, cupiditate
        quia sunt id, quaerat culpa sint minus,
        tempore adipisci accusamus.
      </p>
    </div>
  </Card>,
  document.getElementById('main'));
