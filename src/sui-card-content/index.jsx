import React from 'react';
import SuiCardTitle from '../sui-card-title';
import SuiCardDescription from '../sui-card-description';

class SuiCardContent extends React.Component {
  static get propTypes(){
    return {
      data: React.PropTypes.object,
      handleLayout: React.PropTypes.func
    };
  }

  render(){
    return(
      <div className='sui-Card-content'>
        <SuiCardTitle {...this.props} />
        <SuiCardDescription {...this.props} />
        <a href='#' onClick={this.props.handleLayout}>Layout</a>
      </div>
    );
  }
}

export default SuiCardContent;
