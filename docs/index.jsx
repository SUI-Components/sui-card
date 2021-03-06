import React from 'react'
import ReactDom from 'react-dom'
import SuiCard from '../src'
import SuiMultimedia from '@schibstedspain/sui-multimedia'

import '../src/index.scss'
import './styles/prism.scss'
import './index.scss'
import './styles/syntax.scss'
import './styles/codemirror.scss'
import './styles/demo.scss'
import '../node_modules/@schibstedspain/sui-multimedia/dist/_sui-multimedia.scss'

const image = {
  src: 'https://scontent-mad1-1.cdninstagram.com/t51.2885-15/e15/11199623_633712610062793_1285693904_n.jpg',
  type: 'image',
  alt: 'Test',
  link: 'https://www.instagram.com/p/TNUdPKpMgM/?taken-by=davecarter'
}

ReactDom.render(
  <SuiCard className='myCustom-class'
    primary={
      <a href={image.link}><img src={image.src} /></a>
    }
    secondary={
      <div>
        <h2 className='sui-Card-title'>This is the Card Title</h2>
        <p className='sui-Card-description'>This is the description text of this Card</p>
      </div>
    }
  />,
  document.getElementById('main')
)

ReactDom.render(
  <SuiCard className='myCustom-class'
    primary={
      <SuiMultimedia images={[image]} />
    }
    secondary={
      <div>
        <h2 className='sui-Card-title'>This is the Card Title</h2>
        <p className='sui-Card-description'>This is the description text of this Card</p>
      </div>
    }
  />,
  document.getElementById('main-multimedia')
)
