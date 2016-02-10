import React from 'react';
import cx from 'classnames';
import SuiCardMultimedia from '../sui-card-multimedia';
import SuiCardContent from '../sui-card-content';

class SuiCard extends React.Component {

  render() {

    const classNames = cx({
      'sui-Card': true,
      'sui-Card--landscape': this.props.landscapeLayout,
      'sui-Card--contentFirst': this.props.landscapeLayout && this.props.contentFirst
    });

    return (
      <div className={classNames}>
        <SuiCardMultimedia {...this.props}/>
        <SuiCardContent {...this.props}/>
      </div>
    );
  }
}

SuiCard.propTypes = {
  topImgDefault: React.PropTypes.string,
  topImgDefaultLink: React.PropTypes.string,
  topComponent: React.PropTypes.object,
  bottomComponent: React.PropTypes.object,
  landscapeLayout: React.PropTypes.bool,
  contentFirst: React.PropTypes.bool
};

export default SuiCard;
