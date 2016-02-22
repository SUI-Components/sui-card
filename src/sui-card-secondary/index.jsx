import React from 'react';

class SuiCardSecondaryContent extends React.Component {
  static get propTypes(){
    return {
      secondary: React.PropTypes.array
    };
  }

  render(){
    return(
      <div className='sui-Card-secondary'>
        {this.props.secondary}
      </div>
    );
  }
}

export default SuiCardSecondaryContent;
