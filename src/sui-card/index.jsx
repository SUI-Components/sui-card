import React from 'react';
import cx from 'classnames';

class SuiCard extends React.Component {
  static get propTypes(){
    return {
      landscapeLayout: React.PropTypes.bool,
      contentFirst: React.PropTypes.bool,
      primary: React.PropTypes.any.isRequired,
      secondary: React.PropTypes.any,
      className: React.PropTypes.string
    };
  }

  constructor(props){
    super(props);
    this.state = {
      landscapeLayout: this.props.landscapeLayout
    };
  }

  render() {
    const classNames = cx({
      'sui-Card': !this.props.className,
      [`${this.props.className}`]: this.props.className,
      'sui-Card--landscape': this.state.landscapeLayout,
      'sui-Card--contentfirst': this.props.landscapeLayout && this.props.contentFirst
    });

    return (
      <div className={classNames}>
        <div className='sui-Card-primary'>
          {this.props.primary}
        </div>
        {
          this.props.secondary &&
          <div className='sui-Card-secondary'>
            {this.props.secondary}
          </div>
        }
      </div>
    );
  }
}

export default SuiCard;
