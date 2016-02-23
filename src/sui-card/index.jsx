import React from 'react';
import cx from 'classnames';

class SuiCard extends React.Component {
  static get propTypes(){
    return {
      landscapeLayout: React.PropTypes.bool,
      contentFirst: React.PropTypes.bool,
      primary: React.PropTypes.array,
      secondary: React.PropTypes.array
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
      'sui-Card': true,
      'sui-Card--landscape': this.state.landscapeLayout,
      'sui-Card--contentfirst': this.props.landscapeLayout && this.props.contentFirst
    });

    return (
      <div className={classNames}>
        <div className='sui-Card-primary'>
          {this.props.primary}
        </div>
        <div className='sui-Card-secondary'>
          {this.props.secondary}
        </div>
      </div>
    );
  }
}

export default SuiCard;
