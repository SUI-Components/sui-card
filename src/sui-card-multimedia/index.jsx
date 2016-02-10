import React from 'react';

class SuiCardMultimedia extends React.Component {
  static get propTypes(){
    return {
      data: React.PropTypes.object
    };
  }

  render(){
    return(<img src={this.props.data.multimediaurl} />);
  }
}



export default SuiCardMultimedia;
