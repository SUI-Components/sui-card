import React from 'react';

export default class CardContent extends React.Component {
  render() {
    return (
      <div className='sui-card__content'>
        {this.props.cardcontent}
      </div>
    );
  }
}

CardContent.propTypes = {cardcontent: React.PropTypes.string};
