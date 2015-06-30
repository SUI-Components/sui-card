import React from 'react';
import CardMedia from '../sui-card-media';
import CardContent from '../sui-card-content';

export default class Card extends React.Component {
  render() {
    return (
      <div className='sui-card'>
        <CardMedia {...this.props}/>
        <CardContent {...this.props}/>
      </div>
    );
  }
}
