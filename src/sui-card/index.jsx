import React from 'react';
import cx from 'classnames';

export default class SuiCard extends React.Component {

  renderTop(){
    if(this.props.topComponent){
      return (
        <div className='sui-Card-topContent'>
          {this.props.topComponent}
        </div>
      );
    }

    if(!this.props.topComponent){
      return (
        <div className='sui-Card-topContent'>
          <a href={this.props.topImgDefaultLink}>
            <img src={this.props.topImgDefault} />
          </a>
        </div>
      );
    }
  }

  renderBottom(){
    if(this.props.bottomComponent){
      return (
        <div className='sui-Card-bottomContent'>
          {this.props.bottomComponent}
        </div>
      );
    }
  }

  render() {

    const portraitLayout = cx({
      'sui-Card--portrait': this.props.portraitLayout
    });

    return (
      <div className={`sui-Card ${portraitLayout}`}>
        {this.renderTop()}
        {this.renderBottom()}
      </div>
    );
  }
}

SuiCard.propTypes = {
  topImgDefault: React.PropTypes.string,
  topImgDefaultLink: React.PropTypes.string,
  topComponent: React.PropTypes.object,
  bottomComponent: React.PropTypes.object,
  portraitLayout: React.PropTypes.bool
};
