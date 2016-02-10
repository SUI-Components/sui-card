import React from 'react';

class SuiCardContent extends React.Component {
  static get propTypes(){
    return {
      data: React.PropTypes.object
    };
  }

  render(){
    return(
      <div>
        <h1>{this.props.data.title.content}</h1>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}

export default SuiCardContent;
