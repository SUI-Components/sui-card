import React from 'react';

export default class CardContent extends React.Component {
  render() {
    return (
      <div className='sui-card__content'>
        {this.props.children}
      </div>
    );
  }
}

CardContent.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.component)
};
