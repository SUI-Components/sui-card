import React from 'react';
import cx from 'classnames';

class SuiCard extends React.Component {
  static get propTypes(){
    return {
      landscapeLayout: React.PropTypes.bool,
      contentFirst: React.PropTypes.bool,
      primary: React.PropTypes.array.isRequired,
      secondary: React.PropTypes.array,
      customClass: React.PropTypes.string
    };
  }

  constructor(props){
    super(props);
    this.state = {
      landscapeLayout: this.props.landscapeLayout
    };
  }

  secondary() {
    return (
      <div className='sui-Card-secondary'>
        {this.props.secondary}
      </div>
    );
  }

  render() {
    const classNames = cx({
      'sui-Card': true,
      [`${this.props.customClass}`]: this.props.customClass,
      'sui-Card--landscape': this.state.landscapeLayout,
      'sui-Card--contentfirst': this.props.landscapeLayout && this.props.contentFirst
    });

    return (
      <div className={classNames}>
        <div className='sui-Card-primary'>
          {this.props.primary}
        </div>
        {this.props.secondary && this.secondary.bind()}
      </div>
    );
  }
}

export default SuiCard;
