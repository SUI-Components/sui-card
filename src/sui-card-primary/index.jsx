import React from 'react';

class SuiCardPrimaryContent extends React.Component {
  static get propTypes(){
    return {
      primary: React.PropTypes.array
    };
  }

  render(){
    return(
      <div className='sui-Card-primary'>
        {this.props.primary}
      </div>
    );
  }
}

export default SuiCardPrimaryContent;
