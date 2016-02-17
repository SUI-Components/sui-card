import React from 'react';

class SuiCardDescription extends React.Component {
  static get propTypes(){
    return {
      data: React.PropTypes.object
    };
  }
  render(){
    return <p>{this.props.data.description}</p>;
  }
}

export default SuiCardDescription;
