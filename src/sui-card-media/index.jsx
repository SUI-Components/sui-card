import React from 'react';
import cx from 'classnames';

export default class CardMedia extends React.Component {
  render() {
    const classes = cx({
      'sui-Card-media': true,
      'sui-Card-media--no-picture': !this.props.multimediaUrl
    });

    return (
      <div className={classes}>
        <a href={this.props.url}>
          <img src={this.props.multimediaUrl}/>
        </a>
      </div>
    );
  }
}

CardMedia.propTypes = {
  multimediaUrl: React.PropTypes.string,
  url: React.PropTypes.string
};
