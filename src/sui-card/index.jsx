import React from 'react';

export default class SuiCard extends React.Component {

  renderTop(){
    if(this.props.topComponent){
      return (
        <div>
          {this.props.topComponent}
        </div>
      );
    }

    if(!this.props.topComponent){
      return (
        <a href={this.props.topImgDefaultLink}>
          <img src={this.props.topImgDefault} />
        </a>
      );
    }
  }

  renderBottom(){
    if(this.props.bottomComponent){
      return (
        <div>
          {this.props.bottomComponent}
        </div>
      );
    }
  }

  render() {
    return (
      <div className='sui-Card'>
        {this.renderTop()}
        {this.renderBottom()}
      </div>
    );
  }
}

SuiCard.propTypes = {
  topImgDefault: React.PropTypes.string,
  topImgDefaultLink: React.PropTypes.string,
  topComponent: React.PropTypes.func,
  bottomComponent: React.PropTypes.component
};
