import React from 'react';

class SuiTitle extends React.Component {
  static get propTypes(){
    return{
      data: React.PropTypes.object
    };
  }

  render(){
    return (
      <h1>{this.props.data.title.element}</h1>
    );
  }
}

export default SuiTitle;
