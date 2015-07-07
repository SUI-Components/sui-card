import React from 'react';
import CardMedia from '../sui-card-media';
import CardContent from '../sui-card-content';
import cx from 'classnames';

export default class Card extends React.Component {
  render() {
    const classes = cx({
      'sui-Card': true,
      'is-hover': this.props.hover
    });

    return (
      <div className={classes}>
        <CardMedia {...this.props}/>
        <CardContent>
          {this.props.children}
        </CardContent>
      </div>
    );
  }
}

Card.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.component),
  hover: React.PropTypes.bool
};
