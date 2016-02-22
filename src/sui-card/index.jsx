import React from 'react';
import cx from 'classnames';
import SuiCardPrimaryContent from '../sui-card-primary';
import SuiCardSecondaryContent from '../sui-card-secondary';

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
        <SuiCardPrimaryContent {...this.props}/>
        <SuiCardSecondaryContent {...this.props}/>
      </div>
    );
  }
}

export default SuiCard;
