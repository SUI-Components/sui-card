import React from 'react';

class SuiCardTitle extends React.Component {
  static get propTypes(){
    return{
      data: React.PropTypes.object
    };
  }

  render(){
    return (
      <h2 className='sui-Card-heading'>{this.props.data.title}</h2>
    );
  }
}

export default SuiCardTitle;
