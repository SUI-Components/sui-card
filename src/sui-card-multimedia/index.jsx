import React from 'react';

class SuiCardMultimedia extends React.Component {
  static get propTypes(){
    return {
      data: React.PropTypes.object
    };
  }

  render(){
    return(<img className='sui-Card-image' src={this.props.data.multimediaurl} />);
  }
}

export default SuiCardMultimedia;
